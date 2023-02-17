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
  uses: devops-actions/action-get-tag@v1.1
  with:
    # Optionally strip `v` prefix
    strip_v: true
- name: Use tag
  run: echo ${{steps.tag.outputs.tag}}
```
