## Forked from [dawidd6/action-get-tag](https://github.com/dawidd6/action-get-tag) which has been an archived repo that I was relying on. Updated to fix issue with `set-output` (Deprecated). 

[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/devops-actions/action-get-tag/badge)](https://api.securityscorecards.dev/projects/github.com/devops-actions/action-get-tag)


# Get tag GitHub Action

Simple Action that have only one responsibility - output tag name (parsed from `GITHUB_REF` environment variable).

## Usage

Should be used only when actual tag is pushed, otherwise the Action will exit with an error.

```yaml
on:
  push:
    tags:
      - '*'
```

```yaml
- name: Get tag
  id: tag
  uses: devops-actions/action-get-tag@v1.0.1
  with:
    strip_v: true # Optional: Remove 'v' character from version
    default: v0.0.0 # Optional: Default version when tag not found

- name: Use tag
  run: echo ${{steps.tag.outputs.tag}}
```
