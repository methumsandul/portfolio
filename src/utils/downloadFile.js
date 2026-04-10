export async function downloadFile(url, fileName) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      return false
    }

    const blob = await response.blob()
    const blobUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = blobUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(blobUrl)

    return true
  } catch {
    return false
  }
}
