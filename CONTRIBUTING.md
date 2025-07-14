# Contributing to Crossbuild UI 💡

We’re thrilled that you’re interested in contributing to **Crossbuild UI**! This project is built with love by the community and maintained with care to support beautiful, scalable mobile UI in React Native + Expo.

---

## 📎 What You Can Contribute

We now welcome **public contributions** to:

### ✅ Templates

Improve or submit new app templates based on Expo + Crossbuild UI.

* New layout structures
* Feature-focused templates (e.g., e-commerce, dashboard)
* Performance or structure optimizations

### 🎨 Themes

Contribute additional themes or enhance existing ones.

* Custom color palettes
* Accessibility-first designs
* Modular theme scaffolds

### 🎩 Components (Now Publicly Open!)

We're now accepting public contributions for **UI components** ✨

To contribute a component:

1. Clone the repo: [https://github.com/crossbuildui/crossbuildui](https://github.com/crossbuildui/crossbuildui)
2. Checkout the `open-contribution` branch.
3. Navigate to the `component_contribution` folder. It contains an Expo SDK 53 app setup.
4. Add your component inside `components/` using the following structure:

```
component_contribution/
├── components/
│   └── YourComponentName/
│       ├── index.ts
│       ├── types.ts
│       ├── YourComponentName.tsx
│       ├── YourComponentNameContext.tsx (optional)
│       ├── YourComponentNameOther.tsx (optional)
│       └── README.md
```

5. Add a preview route for the component:

* Create a file in `app/YourComponentName/index.tsx`
* In `app/index.tsx`, add a `<Link />` button for navigation:

```tsx
<Link href="/YourComponentName/+index" asChild>
  <Pressable style={[styles.button, { backgroundColor: colors.primary[500] }]}>
    <Text style={[styles.buttonText, { color: colors.foreground }]}>
      Your Component
    </Text>
  </Pressable>
</Link>
```

6. Commit your changes in the `open-contribution` branch and submit a PR titled:

```
✨ feat: add <YourComponentName> component
```

> ✅ All contributions will be credited on the Crossbuild UI [website](https://www.crossbuildui.com), GitHub, and docs.

---

## 🔧 Bug Reports

Found a bug? Open an [issue](https://github.com/crossbuildui/crossbuildui/issues/new/choose) with:

* Component or template name
* Steps to reproduce
* Expected vs actual behavior
* Environment info (Expo version, OS, etc.)

---

## 📅 How to Contribute

1. **Fork** the repo.
2. **Checkout** the `open-contribution` branch:

```bash
git checkout open-contribution
```

3. **Create a new branch**:

```bash
git checkout -b feat/my-awesome-component
```

4. **Make your changes** under `component_contribution/components`
5. **Test your component** inside the example app
6. **Submit a PR** to `open-contribution` branch

---

## 📃 Code Guidelines

* Use TypeScript and functional components
* Follow component folder naming convention: `PascalCase`
* Theme support (light/dark) is required
* Write reusable, accessible, and scalable components
* Use Crossbuild UI theming tokens from `@crossbuildui/core`

---

## 🙌 Thanks for Contributing!

We appreciate every line of code, every component, every suggestion — big or small. Together, we’re building a strong UI foundation for Expo + React Native devs.

If you have questions or ideas, feel free to open a discussion or reach out!

— The Crossbuild UI Team