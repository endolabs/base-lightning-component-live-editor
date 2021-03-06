({
  getTemplate: function (component) {
    return {
      "@activeSectionName": "B",
      "lightning:accordionSection": [
        {
          "@name": "A",
          "@label": "Accordion Title A",
          "aura:text": { "@value": "This is the content area for section A" }
        },
        {
          "@name": "B",
          "@label": "Accordion Title B",
          "aura:text": { "@value": "This is the content area for section B" }
        },
        {
          "@name": "C",
          "@label": "Accordion Title C",
          "aura:text": { "@value": "This is the content area for section C" }
        }
      ]
    };
  },

  componentSetting: function (component) {
    var template = this.getTemplate(component);
    return component.find("util").parseTemplate("lightning:accordion", template);
  },

  create: function (component, componentSetting) {
    component.find("preview").createComponents(component, componentSetting);
  },

  renderCode: function (component) {
    console.log("render code");
    component.find("highlight").highlightCode(component.get("v.code"));
  }
})
