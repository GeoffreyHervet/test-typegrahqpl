# Start script

```sh
npm ci; npm start
```

# GraphQL request

```gql
{
  recipes {
    title
    foo {
      # ocko #{
      renamed: a
      b # le champs b
      # c
      d
    }
  }
}
```

# See output

```
{
      renamed: a
      b
      d
    }
```

easy to send it to a service

```gql
{
  product(uuid: "uuid") {
    renamed: a
    b
    d
  }
}
```
