# userprofiles
An app to load the users of an application and there details


# Reasoning behind technical choices

## architecture I have used and why?

- state mangement :
Initially at the start of the project I used nextjs `getStaticProp` to fetch my data and passing it down to the components(prop drilling) this was done to quickly set up the project and get it to work. However, I changed this and moved it to `react-context` so as to avoid prop drilling and make our components to easily access the data via context. This makes our application scallable
- I have also used SSR(server side rendering) instead of SGS(static generated sites).  I have used `getServerSideProps` to generate my pages instead of a combination of `getStaticProps` and `getStaticPaths`. 


## Things I would have done different

- For state management. I should have used react-context together with useReducer() for this this makes it easier to dispatch actions.I would prefer this to redux as it requires less boilerplates and is much easier to use. but given a graphql api I would have looked into using `Apollo client 3` which seems to be providing some execellent feactures

- I would have used SGS for this project to make it fast 
- I would have written tests.
- work more on css to beutify the project
