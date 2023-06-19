# FormKit - LocalStorage plugin removes Datepicker's value on refresh

## The bug!

While using FormKit's LocalStorage plugin, I have noticed that the value for the Datepicker input (pro) is being removed from the LocalStorage when refreshing the page. This bug **HAPPENS ONLY** when the entire form is wrapped with Nuxt's `<ClientOnly>` component, which is a temporary solution to a different bug - https://github.com/formkit/formkit/issues/720

1. Run `npm install`
2. Open the `formkit.config.ts` file and swap `fk-XXXXXXXXXXX` with your FormKit's Pro Key
3. Run the project locally (`npm run dev`) and open `localhost:3000`
4. Add your name and pick a date
5. Open `DevTools > Application > Local Storage`
6. Find `formkit-contact` key and open the `data` property (There should be `birthday` key inside)
7. Refresh the page (the `birthday` key is gone and the input resets to the default state!)

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## FormKit Pro!

Open the `formkit.config.ts` file and swap `fk-XXXXXXXXXXX` with your FormKit's Pro Key

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

