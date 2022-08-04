```
  <Route
    path="/page1"
    render={({ match: { url } }) => (
      <Switch>
        {console.log(url)}
        <Route exact path={url} render={() => <Page1 />} />
        <Route path={`${url}/detailA`} render={() => <Page1DetailA />} />
        <Route path={`${url}/detailB`} render={() => <Page1DetailB />} />
      </Switch>
    )}
  />
```

※props に{match:{url}}が存在するわけだけど、引数時点で必要なものだけ引っ張れるの？？？
