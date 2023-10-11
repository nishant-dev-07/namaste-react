# Nameste React

# Parcel

    - Dev Build
    - Local Server
    - HMR = Hot Module Replacement -> Refresh automatic page
    - File Watching Algorithm -> written in c++
    - Caching - Faster Builds
    - Image Optimization
    - Minification of files
    - Bundling
    - Compressing
    - Content Hashing
    - Code Splitting
    - Differntial Bundling - Support older browsers
    - Diagonostic
    - Erro Handling
    - HTTPs
    - Tree Shaking - remove unused code
    - Different dev and prod bundles


# food ordering website


/** 
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Image
 *          - Name of res, Star Rating, Cuisine, Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 # two types of import export

 - Default import/export

 export default component
 import component file


 - named import/export
export const component;
import {component} file

# React Hooks 
    (Normal JS utility functions)
Top uses two hookes
    - useState() -> superpowerful State Variable in React
    - useEffect()


    --> whenever an state variable change react find the diffrence between virtual dom and re rerender my component

=> why is react is fast -> React is doing  at efficiance dom manipulation

# 2 type of Routing in webapps
- Client side Routing => not making any network call when changing pages
- Server side Routing
 

 # Redux Toolkit
    - Install @reduxjs/tookit and react-redux
    - Build our store
    - Connect our store to our app
    - Slice(cartSlice)
    - dispach(action)
    - Selector


# Types of testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing 

# Setting up Testing in our app
- Install React Testing Library
- Install jest
- Install  Babel dependencies
- Configure Babel
- Configure Parcel config file to disable default babel transpilation
- jest configuration - npx jest -- init
- install jsdom library
- Install @babel/preset-react library - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom - npm i -D @testing-library/jest-dom