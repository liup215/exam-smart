<template>
  <div class="app-container">
    <h3>{{syllabus.name}}</h3>
    <div style="margin: 20px">
    <el-tree
      :data="chapters"
      node-key="id"
      :props="defaultProps"
      default-expand-all
      :expand-on-click-node="false"
    >
      <div class="chapter-tree-node" slot-scope="{ node, data }">
        <span>{{data.name}}</span>
        <span>
          <el-button type="text" size="mini" @click="chapterAddDialogOpen(data.id)">添加子章节</el-button>
          <el-button type="text" size="mini" @click="chapterEditDialogOpen(data)">编辑章节</el-button>
          <el-button type="text" size="mini" @click="chapterDelete(data.id)">删除</el-button>
        </span>
      </div>
    </el-tree>
    </div>
    <el-button type="primary" @click="chapterAddDialogOpen(0)">添加章节</el-button>

    <el-dialog
      title="章节编辑"
      :visible.sync="chapterEditVisible"
      :before-close="closeChapterParam"
    >
      <el-form v-model="chapterEditParam" label-width="80px">
        <el-form-item label="章节名称">
          <el-input v-model="chapterEditParam.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="chapterEdit" :disabled="isChapterAdd">编辑</el-button>
        <el-button type="primary" @click="chapterAdd" :disabled="!isChapterAdd">添加</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import syllabusApi from '@/api/syllabus'
import chapterApi from '@/api/chapter'
export default{
  data () {
    return {
      syllabus: {},
      chapters: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      chapterEditVisible: false,
      chapterEditParam: {
        id: null,
        name: null
      },
      isChapterAdd: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      var id = parseInt(this.$route.query.id)
      this.chapterEditParam = {
        id: null,
        name: null,
        syllabusId: id
      }
      
      syllabusApi.getById({id: id}).then(response => {
        this.syllabus = response.data
      })

      chapterApi.chapterTree({syllabusId: id}).then(response => {
        this.chapters = response.data.list
        this.chapterEditVisible = false
      })
    },
    chapterAddDialogOpen (pid) {
      this.isChapterAdd = true
      if (pid !== 0) {
        this.chapterEditParam.parentId = pid
      }
      this.chapterEditVisible = true
    },
    chapterEditDialogOpen(chapter) {
      this.isChapterAdd = false
      this.chapterEditParam = chapter
      this.chapterEditVisible = true
    },
    chapterAdd () {
      this.chapterEditParam.SyllabusId = parseInt(this.$route.query.id)
      if (this.syllabus.subjectId === 0) {
        this.$message('书籍信息错误，请稍后再试')
      }
      chapterApi.chapterAdd(this.chapterEditParam).then(() => {
        this.chapterEditParam = null
        this.fetchData()
      })
    },
    chapterEdit () {
      this.chapterEditParam.syllabusId = parseInt(this.$route.query.id)
      if (this.syllabus.subjectId === 0) {
        this.$message('书籍信息错误，请稍后再试')
      }
      chapterApi.chapterUpdate(this.chapterEditParam).then(() => {
        this.fetchData()
      })
    },
    chapterDelete(id) {
      chapterApi.chapterDelete({id: id}).then(response => {
        this.$message(response.message)
        this.fetchData()
      })
    },
    closeChapterParam (done) {
      this.chapterEditParam = {
        id: null,
        name: null,
        syllabusId: parseInt(this.$route.query.id),
        parentId: null
      }
      this.chapterEditVisible = false
      done()
    }

  }
}
</script>
<style>
.chapter-tree-node {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>