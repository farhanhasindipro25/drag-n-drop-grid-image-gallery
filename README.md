# Responsive Image Gallery

**LIVE LINK: https://responsive-image-gallery-sage.vercel.app/**

## FEATURES

- Images can be viewed on a grid gallery.
- Images can be re-ordered by dragging and dropping to different positions.
- One or more or all mages can be deleted from the list.
- The list can be retrieved after deleting all images.
- The first image in the top-left position is the feature image and any image from the gallery can be set as a feature image by dragging and dropping in the top-left slot.

### TECHNOLOGIES USED

- Typescript
- NextJS
- TailwindCSS
- react-DND
- HeroIcons
- tailwind-merge
- clsx
- immutability-helper
- Vercel

### ATTRACTIONS & ADVANCEMENTS

- Colocated codebase architecture using latest NextJS App Router.
- Maintainable and reusable components.
- Reusable styling kits, utility functions, typescript interfaces, service providers, static data organized separately for easier refactoring and debugging.
- Usage of commit-conventions for meaningful commit messages
  - doc: Documentation
  - chore: File/folder setup
  - feat: Feature
  - refactor: Changes that are not features.
  - fix: Fixation of issues/errors
  - etc

### HOW TO SETUP THIS PROJECT

1. Clone this repository

`git clone https://github.com/farhanhasindipro25/quadque-image-gallery.git`

2. Access the project directory

`cd quadque-image-gallery`

3. Install all dependencies

`yarn install`

4. Now run `yarn dev`, and you are all set to see the project.

### CODEBASE ARCHITECTURE BREAKDOWN

- `README.md/:` Project documentation and setup instructions.
- `src/:` Contains source code for the application.
- `src/_libs:` All necessities and helpers colocated together.
- `src/_libs/components:` Contains all components of the project.
- `src/_libs/interfaces:` Contains all Typescript interfaces of the project.
- `src/_libs/constants:` Contains all constants required for the project.
- `src/_libs/services:` Contains services required for the project. E.g. Providers, etc.
- `src/_libs/statics:` Contains static data required for the project.
- `src/_libs/styles:` Contains defined styles for the project.
- `src/_libs/utils:` Contains defined utilities for the project.
- `src/app:` Contains the NextJS App router.
- `src/app/layout.tsx:` Root layout file containing font, metadata, provider, and wrapper setups.
- `src/app/page.tsx:` Root route of the project.

### NOTEWORTHY APPROACHES

1. Since, this is a frontend focused project, I added a feature of retrieving data upon reload when all images are deleted.
2. Added an empty state when there are no data.
3. Use the `immutability-helper` library for updating image positions during drag and drop.

```
setImages(
  update(images, {
    $splice: [
      [index, 1],       // Remove the image from its current position
      [atIndex, 0, image], // Insert the image at the new position
    ],
  })
);

```

Here,

- The `update` function from immutability-helper is called with the original images state and an update object.
- The `$splice` command is used to splice the images array, removing the image from its current position (index) and inserting it at a new position (atIndex).
- This results in a new array being created with the desired changes, while leaving the original images array unchanged.

4. While finding and moving images through the `findImage` and `moveImage` function, I used useCallback for performance optimization.
