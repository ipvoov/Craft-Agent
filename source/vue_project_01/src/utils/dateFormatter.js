export function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 示例用法：
// import { formatDate } from '@/utils/dateFormatter'
// const formatted = formatDate('2023-06-15')