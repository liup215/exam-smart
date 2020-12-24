<template>
  <div class="app-container">
    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <el-form-item label="学科：">
        <el-select v-model="queryParam.subjectId" clearable>
          <el-option v-for="item in subjects" :key="item.ID" :value="item.ID"
                     :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">查询</el-button>
        <router-link :to="{path:'/education/syllabus/edit'}" class="link-left">
          <el-button type="primary">添加</el-button>
        </router-link>
      </el-form-item>
    </el-form>
    <el-table :data="syllabusList" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="ID" label="Id" />
      <el-table-column prop="Name" label="名称" />
      <el-table-column prop="SubjectName" label="科目"></el-table-column>
      <el-table-column prop="TypeName" label="考试局"></el-table-column>
      <el-table-column width="300px" label="操作" align="center">
        <template slot-scope="{row}">
          <router-link :to="{path:'/education/syllabus/edit', query:{id:row.ID}}" class="link-left">
            <el-button size="mini" type="primary">编辑</el-button>
          </router-link>
          <router-link :to="{path:'/education/syllabus/chapter', query:{id:row.ID}}" class="link-left">
            <el-button size="mini" type="primary">章节管理</el-button>
          </router-link>
          <el-button size="mini" type="danger" disabled class="link-left">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <el-dialog
      title="考纲编辑"
      :visible.sync="syllabusEditVisible"
      :before-close="closeSyllabusParam"
    >
      
      <span slot="footer">
        <el-button type="primary" @click="syllabusEdit" :disabled="isSyllabusAdd">编辑</el-button>
        <el-button type="primary" @click="syllabusAdd" :disabled="!isSyllabusAdd">添加</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import syllabusApi from '@/api/syllabus.js'
import default_cover from '@/assets/default_cover.png'
import { syllabusType } from '@/config/education'
import { getSyllabusTypeName } from '@/utils/education'

export default {
  data () {
    return {
      queryParam: {
        subjectId: null
      },
      subjectFilter: null,
      listLoading: true,
      syllabusList: [],
      syllabusEditParam: {
        ID: null,
        name: null,
        subjectId: null
      },
      syllabusEditVisible: false,
      isSyllabusAdd: true,
      cover: default_cover,
      syllabusType: syllabusType
    }
  },
  created () {
    this.initSubject()
    this.search()
  },
  methods: {
    submitForm () {
      this.search()
    },
    search () {
      this.listLoading = true

      syllabusApi.list(this.queryParam).then(response => {
        const re = response.data
        this.syllabusList = re.list
        this.listLoading = false
      })
    },
    syllabusAdd () {
      this.syllabusEditVisible = false
      this.listLoading = true

      syllabusApi.add(this.syllabusEditParam).then(() => {
        this.search()
      })
    },
    syllabusEdit () {
      this.syllabusEditVisible = false
      this.listLoading = true

      syllabusApi.edit(this.syllabusEditParam).then(() => {
        this.search()
      })
    },
    subjectFormatter (row, column, cellValue) {
      return this.subjectEnumFormat(cellValue)
    },
    syllabusAddDialogOpen () {
      this.isSyllabusAdd = true
      this.syllabusEditVisible = true
    },
    syllabusEditDialogOpen (syllabus) {
      this.isSyllabusAdd = false
      this.syllabusEditParam.name = syllabus.name
      this.syllabusEditParam.ID = syllabus.ID
      this.syllabusEditParam.Type = syllabus.Type

      var sub = this.subjects.filter(data => data.ID === syllabus.subjectId)[0]

      this.syllabusEditParam.subjectId = sub.ID
      this.syllabusEditVisible = true
    },
    closeSyllabusParam (done) {
      this.syllabusEditParam={
        id: null,
        name: null,
        subjectId: null
      }
      done()
    },
    syllabusChapter () {
      this.$router.push({path: '/education/syllabus/chapter'})
    },
    getSyllabusTypeName(key) {
      return getSyllabusTypeName(key)
    },
    getSubjectName(id) {
      for (var i = 0; i<this.subjects.length; i++) {
        if (this.subjects[i].ID === id) {
          return this.subjects[i].name
        }
      }

      return '-'
    },
    ...mapActions('exam', { initSubject: 'initSubject' })
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      levelEnum: state => state.user.levelEnum
    }),
    ...mapGetters('exam', ['subjectEnumFormat']),
    ...mapState('exam', { subjects: state => state.subjects })
  }
}
</script>
<style>
.syllabusCard {
  text-align: center;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  padding: 80px 20px;
  margin-bottom: 10px;
}

.syllabusAdd {
  font-size: 4em;
  color: grey;
}
</style>