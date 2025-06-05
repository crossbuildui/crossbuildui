# ✅ Template Submission Checklist

Before submitting a new template to the [Crossbuild UI](https://github.com/crossbuildui) repo, please ensure the following checklist is fully completed:

---

## 📁 General

* [ ] Template is placed in the correct folder under `/templates/{your-template-name}`
* [ ] Template folder name uses `kebab-case` and is descriptive (e.g., `ecommerce-starter`)
* [ ] Includes a `README.md` inside the template folder with:

  * [ ] Template purpose and features
  * [ ] Installation and usage instructions
  * [ ] References to Crossbuild UI documentation

---

## ⚙ Technical

* [ ] Based on `create-expo-app` or consistent Crossbuild base
* [ ] Uses `@crossbuildui/core` for UI components
* [ ] Includes a working theme integration (`CrossbuildProvider` with theme config)
* [ ] App runs successfully via `npx expo start` with no errors
* [ ] No unused files or code in the template

---

## 🎨 Design & Theming

* [ ] Supports both **light and dark mode**
* [ ] Uses `tokens` and global theme values correctly (e.g., spacing, colors)
* [ ] Follows a consistent component structure (e.g., `components/`, `screens/`, `assets/`)

---

## 📦 Dependencies

* [ ] Only includes minimal and necessary dependencies
* [ ] All dependencies are listed in `package.json`
* [ ] No unused dependencies or dev-only packages unless required for development

---

## 📄 Documentation

* [ ] Template README includes links to:

  * [ ] [Crossbuild UI Getting Started Guide](https://www.crossbuildui.com/docs/getting-started/introduction)
  * [ ] [Theming Guide](https://www.crossbuildui.com/docs/getting-started/theming)

---

## 🧪 Testing

* [ ] Template tested on:

  * [ ] Android (simulator or physical)
  * [ ] iOS (simulator or physical)
  * [ ] Web (if applicable)
* [ ] No runtime errors or console warnings on initial load

---

## 🙌 Final Steps

* [ ] Commit message uses [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat: add ecommerce-starter template`)
* [ ] Open a Pull Request with:

  * [ ] Clear title and description
  * [ ] Link to a preview (if applicable)
  * [ ] Screenshots or demo of the template in use

---

Your contribution will be reviewed and, if approved, merged into the main Crossbuild UI repo. Thank you for helping grow the ecosystem! 🚀