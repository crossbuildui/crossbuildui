# 🧱 Crossbuild UI – Component Contribution Workspace

Welcome to the `component_contribution` folder! This is the official workspace for developers who want to contribute new components to **Crossbuild UI**.

It includes a fully functional **Expo SDK 53** app setup where you can build, test, and preview your components in isolation before submitting them.

---

## 📁 Folder Structure

```
component_contribution/
├── app/                      # Screens for previewing components
│   ├── _layout.tsx
│   ├── _not-found.tsx
│   ├── index.tsx             # Home screen linking to all previews
│   └── YourComponentName/    # Create your own folder here
│       └── index.tsx         # Preview file for your component
├── assets/                   # Optional images/icons
├── components/               # Add your new component here
│   └── YourComponentName/
│       ├── index.ts
│       ├── types.ts
│       ├── YourComponentName.tsx
│       ├── YourComponentNameContext.tsx (optional)
│       ├── YourComponentNameOther.tsx   (optional)
│       └── README.md         # Must follow official doc format
```

---

## 🧩 How to Add a New Component

1. **Clone** the repo and switch to the `open-contribution` branch:

   ```bash
   git checkout open-contribution
   ```

2. **Create your component folder** in `components/YourComponentName/` following the structure shown above.

3. **Add a preview screen** for your component in `app/YourComponentName/index.tsx`.

4. **Link it in `app/index.tsx`** so it appears in the component preview app:

```tsx
<Link href="/YourComponentName/+index" asChild>
  <Pressable style={[styles.button, { backgroundColor: colors.primary[500] }]}>
    <Text style={[styles.buttonText, { color: colors.foreground }]}>
      Your Component
    </Text>
  </Pressable>
</Link>
```

5. **Test** your component inside the Expo app.

6. **Write a `README.md`** inside your component folder that clearly documents the usage, props, and variants. Use the same format as seen in:
   [https://www.crossbuildui.com/docs/components/breadcrumbs](https://www.crossbuildui.com/docs/components/breadcrumbs)

7. **Commit and push** your changes to a new branch:

   ```bash
   git checkout -b feat/YourComponentName
   ```

8. **Submit a pull request to the `open-contribution` branch.**

---

## 📌 Contribution Credit

All approved components will be:

* Added to the Crossbuild UI core or auxiliary libraries
* Listed on the official website with your GitHub profile credited
* Highlighted in release notes and social announcements 💙

Thank you for helping grow the Crossbuild UI ecosystem!

— The Crossbuild UI Team