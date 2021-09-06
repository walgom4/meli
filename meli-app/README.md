This is a Next.js project with nodejs

## Getting Started

First, install dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API

API routes to search products [http://localhost:3000/api/items?q=:query&limit=10&offset=0](http://localhost:3000/api/items?q=hoja&limit=10&offset=0). This endpoint can be edited in `server.js`.

API routes to get product detail [http://localhost:3000/api/items/:id](http://localhost:3000/api/items/MLA859496798). This endpoint can be edited in `server.js`.

## Tecnologies

Redux
Styled components
i18n
swr
express
axios

## Folder Structure
```bash
├── components              # based in atomic design
├────── atoms               
├────── molecules               
├────── organisms           
├────── template            
├── hooks                   # custom hooks
├── pages                   # pages
├── public                  # pages
├── store                   # slices, reducers, actions
├── styles                  # global styles
├── themes                  # theme
├── utils                   # Tools and utilities
├── i18n.js                 # Internationalization
├── jsconfig.json           # Configuration file
├── next.config.json        # Configuration file
├── package.json            # Scripts and dependencies
├── README.md
└── server.js               # API/proxy
```
