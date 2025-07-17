# Crossbuild UI ✨

Welcome to the official **Crossbuild UI** GitHub repository — the central hub for open-source components, themes, and templates built using the [Crossbuild UI](https://www.crossbuildui.com) system. This project enables developers to build Expo apps faster with beautiful, flexible UI and developer-first tooling.

> ⚡️ Contribute real components, themes, and templates that developers use in production — and get full credit across our site, docs, and GitHub.

---

## 💎 What’s Inside

This monorepo contains:

### 📦 Templates (`/templates`)
Pre-built Expo apps using Crossbuild UI components:

- `default/`: Minimal starter kit.
- More examples coming soon!

---

### 🎨 Themes (`/themes`)
Theme files that define colors, spacing, and tokens:

- `default-theme.ts`
- `modern-theme.ts`

> Easily drop these into any Crossbuild-powered Expo app.

---

### 🧩 Component Contribution App (`/component_contribution`)
A full Expo app setup where anyone can contribute new **Crossbuild UI components**.

- All contributions are made in the [`open-contribution`](https://github.com/crossbuildui/crossbuildui/tree/open-contribution) branch.
- Finalized components are reviewed and merged into `main` by the core team.

📄 [View component contribution guide →](./component_contribution/README.md)

---

## 🚀 Get Started with a Template

```bash
cbui-cli init my-expo-app@latest
# or choose a specific template
cbui-cli init my-app@latest --template stock-app
```

```bash
cd my-app
npm install
npx expo start
```

> For non-default templates, run:  
> `cbui-cli install`

---

## 🧠 Contribute to Crossbuild UI

We now **accept public contributions** for new components, templates, and themes!

### ✅ Contribute a Component

1. **Switch to the `open-contribution` branch**
2. Navigate to `/component_contribution/components`
3. Create a new folder with your component name:
    ```
    component_contribution/
      components/
        MyComponent/
          MyComponent.tsx
          index.ts
          types.ts
          README.md
    ```
4. Add a demo preview file at:
    ```
    component_contribution/app/MyComponent/index.tsx
    ```
5. Link it in `app/index.tsx` for navigation.

6. Commit to `open-contribution` and submit a PR.

📘 Full structure and checklist here: [Component Contribution Guide](./component_contribution/README.md)

---

### ✨ Other Ways to Contribute

- 🖼 Submit custom themes → `/themes`
- 📱 Submit a template → `/templates`
- 🐛 Report a bug → [New Issue](https://github.com/crossbuildui/crossbuildui/issues/new?template=bug-report.yml)

---

## 📚 Documentation

- [Getting Started](https://www.crossbuildui.com/docs/getting-started/introduction)
- [Theming Guide](https://www.crossbuildui.com/docs/getting-started/theming)
- [Component API](https://www.crossbuildui.com/docs/components)
- [CBUI CLI](https://www.crossbuildui.com/docs/cli/introduction)

---

## 💬 Community

- 💬 [Discord](https://discord.gg/UNFyAjsp)
- 📢 [GitHub Discussions](https://github.com/crossbuildui/crossbuildui/discussions)

---

## 🤝 Recognition & Credits

We credit all contributors who help build Crossbuild UI on:

- The [official site](https://www.crossbuildui.com/contributors)
- Component pages
- GitHub contributor graphs

---

# 🌟 Contributors

<div>
  <p><em>🚀 Meet Our Amazing Contributors who made Crossbuild UI possible!</em></p>
</div>

<table>
  <tr>
    <td align="center" width="200px">
      <a href="https://github.com/gaurav-1302">
        <img src="https://github.com/gaurav-1302.png" width="100px;" alt="Founder"/>
        <br />
        <sub><b>Gaurav Singh</b></sub>
        <br/>
      </a>
      <br />
      <img src="https://img.shields.io/badge/👑-Founder-gold?style=for-the-badge" alt="Founder" title="Founder"/>
      <br />
      <img src="https://img.shields.io/badge/🧱-UI%20Architect-blue?style=flat-square" alt="UI Architect"/>
      <img src="https://img.shields.io/badge/🎨-Theme%20Wizard-purple?style=flat-square" alt="Theme Wizard"/>
      <img src="https://img.shields.io/badge/⚙️-Template%20Engineer-green?style=flat-square" alt="Template Engineer"/>
      <img src="https://img.shields.io/badge/🚀-Early%20Builder-orange?style=flat-square" alt="Early Builder"/>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/shivansh2511">
        <img src="https://github.com/shivansh2511.png" width="100px;"/>
        <br />
        <sub><b>Shivansh Srivastava</b></sub>
        <br/>
      </a>
      <br />
      <img src="https://img.shields.io/badge/💻-Core%20Developer-silver?style=for-the-badge" alt="Core Developer"/>
      <br />
      <img src="https://img.shields.io/badge/🐛-Bug%20Buster-red?style=flat-square" alt="Bug Buster"/>
      <img src="https://img.shields.io/badge/🚀-Early%20Builder-orange?style=flat-square" alt="Early Builder"/>
    </td>
  </tr>
</table>

---

## 🏆 Badge System

<div>
  <h3>🎯 Contribution Badges</h3>
  <p><em>Badges are automatically awarded based on your contributions!</em></p>
</div>

<table>
  <tr>
    <th>Badge</th>
    <th>Description</th>
    <th>How to Earn</th>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/👑-Founder-gold?style=flat-square" alt="Founder"/></td>
    <td><strong>Founder</strong></td>
    <td>Project founder and creator</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/🧱-UI%20Architect-blue?style=flat-square" alt="UI Architect"/></td>
    <td><strong>UI Architect</strong> - Component Creator</td>
    <td>Contributed a fully functional new UI component</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/🎨-Theme%20Wizard-purple?style=flat-square" alt="Theme Wizard"/></td>
    <td><strong>Theme Wizard</strong> - Theme Designer</td>
    <td>Designed or improved a theme with color tokens and typography</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/⚙️-Template%20Engineer-green?style=flat-square" alt="Template Engineer"/></td>
    <td><strong>Template Engineer</strong> - Template Builder</td>
    <td>Added a complete app template for Expo using Crossbuild UI</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/🐛-Bug%20Buster-red?style=flat-square" alt="Bug Buster"/></td>
    <td><strong>Bug Buster</strong> - Bug Fixer</td>
    <td>Fixed a major bug or issue</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/🧰-Doc%20Mechanic-yellow?style=flat-square&logo=book" alt="Doc Mechanic"/></td>
    <td><strong>Doc Mechanic</strong> - Docs Contributor</td>
    <td>Improved official documentation</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/🚀-Early%20Builder-orange?style=flat-square" alt="Early Builder"/></td>
    <td><strong>Early Builder</strong> - Early Contributor</td>
    <td>Among the first 10 contributors to the project</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/🌍-Global%20Dev-brightgreen?style=flat-square" alt="Global Dev"/></td>
    <td><strong>Global Dev</strong> - Community Advocate</td>
    <td>Shared or promoted the project across communities</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/🔐-Security%20Scout-red?style=flat-square" alt="Security Scout"/></td>
    <td><strong>Security Scout</strong> - Security Reviewer</td>
    <td>Flagged or fixed a security-related issue</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/📐-Design%20Aligner-indigo?style=flat-square" alt="Design Aligner"/></td>
    <td><strong>Design Aligner</strong> - Figma to UI</td>
    <td>Built a component based on a real-world Figma design</td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/💡-Idea%20Starter-yellow?style=flat-square" alt="Idea Starter"/></td>
    <td><strong>Idea Starter</strong> - Feature Proposer</td>
    <td>Suggested and shaped a feature that got accepted</td>
  </tr>
</table>

---

## 📊 Project Stats

<div>
  <img src="https://img.shields.io/badge/Total%20Contributors-3-blue?style=for-the-badge&logo=people" alt="Total Contributors"/>
  <img src="https://img.shields.io/badge/Components%20Created-27+-green?style=for-the-badge&logo=puzzle-piece" alt="Components Created"/>
  <img src="https://img.shields.io/badge/Themes%20Available-2-purple?style=for-the-badge&logo=palette" alt="Themes Available"/>
  <img src="https://img.shields.io/badge/Templates%20Built-2-orange?style=for-the-badge&logo=template" alt="Templates Built"/>
</div>

---

## 🤝 Want to Contribute?

<div>
  <p>Ready to earn your badges? Check out our <a href="CONTRIBUTING.md">Contributing Guide</a> to get started!</p>
  
  <a href="CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/Join%20Us-Contribute%20Now-brightgreen?style=for-the-badge&logo=github" alt="Contribute Now"/>
  </a>
</div>

---

## 🛡 Code of Conduct

All contributors must follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## 📝 License

MIT for templates and themes.  
Component packages (`@crossbuildui/*`) are licensed under the [Crossbuild UI License](./LICENSE).

---

Built with ❤️ by the Crossbuild UI community.
