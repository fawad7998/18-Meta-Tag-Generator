import "./styles/styles.css";
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import GeneratedMetaTag from "./components/GenerateMetaTag";
import { generateMetaTags } from "./Generator/Generator";
import MetaTagForm from "./components/MetaTagForm";
const App = () => {
  const [metaTags, setMetaTags] = useState("");
  const [metaTagsCollections, setMetaTagsCollections] = useState({
    title: "",
    description: "",
    keywords: "",
    author: "",
    url: "",
    imageUrl: "",
  });

  useEffect(() => {
    setMetaTags(generateMetaTags(metaTagsCollections));
  }, [metaTagsCollections]);

  return (
    <div className="App Container">
      <title>Meta Tag Generator</title>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <h1 className="meta-tag-title">Meta Tag Generator</h1>
          <MetaTagForm
            metaTagsCollections={metaTagsCollections}
            setMetaTagsCollections={setMetaTagsCollections}
          />
          <GeneratedMetaTag metaTags={metaTags}/>
        </Card.Body>
      </Card>
    </div>
  );
};
export default App;
