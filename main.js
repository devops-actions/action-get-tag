const core = require("@actions/core")

async function main() {
  try {
    const ref = process.env.GITHUB_REF
    const strip_v = process.env.INPUT_STRIP_V
    const default_version = process.env.INPUT_DEFAULT
    let tag

    if(!ref)
      throw "GITHUB_REF is not defined"

    if(ref.startsWith("refs/tags/"))
      tag = ref.replace(/^refs\/tags\//, "")
    else if(default_version)
      tag = default_version
    else
      throw `Not a tag ref (${ref}) or default version not set`

    if(!tag)
      throw `Not tag version found`

    if(strip_v === "true" && tag.startsWith("v"))
      tag = tag.replace(/^v/, "")

    core.info(`ref=${ref}`)
    core.info(`tag=${tag}`)

    core.setOutput("tag", tag);
  }
  catch (error) {
    core.setFailed(error);
  }
}

main()
