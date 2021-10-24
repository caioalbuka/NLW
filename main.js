
      const LinksSocialMedia ={
        github:"caioalbuka",
        youtube:"caioalbuka",
        facebook:"caioalbuka",
        instagram:"caioalbuka"
      }
      
function changeocialMediaLinks(){
for (let li of SocialLinks.children) {
  const social = li.getAttribute('class')

  li.children[0].href = `https;//${social}.com/${LinkSocialMedia[ocial]}`
}
}
changeSocialMediaLink()

function getGitHubProfileInfos(){
  const url=`http://api.github.com/user/${LinksSocialMedia.github}`

  fetch(url).then(response => response.jason())
  .then(data => {userName.textContent = data.name  })

}