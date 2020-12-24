import { syllabusType } from '@/config/education'

export function getSyllabusTypeName(key) {
  for (var i = 0; i<syllabusType.length; i++) {
    if (syllabusType[i].key === key) {
      return syllabusType[i].name
    }
  }

  return '-'
}