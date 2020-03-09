;(function() {
  const arr = Array.from(document.querySelectorAll('.detail-title, .detail-content')).slice(0, 4)
  const jobTitle = document.querySelector('.bg-title').innerText
  const position = document.querySelectorAll(
    '.detail-box .detail-table > tbody > tr:nth-child(1) > td:nth-child(4)',
  )[0].innerText
  const descHTML = [`工作地点：${position}`, ...arr.map(e => e.innerHTML.trim())].join('<br/><br/>')
  const link = window.location.href
  const data = {
    jobTitle,
    desc: descHTML,
    applyLink: link,
  }
  console.log(JSON.stringify(data, null, 2))
})()
