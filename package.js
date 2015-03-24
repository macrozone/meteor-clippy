Package.describe({
  name: 'macrozone:clippy',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/macrozone/meteor-clippy',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

var agents = ["Bonzi", "Clippy", "F1", "Genie", "Genius", "Links", "Merlin", "Peedy", "Rocky", "Rover"];

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  agents.forEach(function(agent)
  {
    api.addFiles("agents/"+agent+"/agent.js", "client", {isAsset: true});
    api.addFiles("agents/"+agent+"/map.png", "client", {isAsset: true});
    api.addFiles("agents/"+agent+"/sounds-mp3.js", "client", {isAsset: true});
    api.addFiles("agents/"+agent+"/sounds-ogg.js", "client", {isAsset: true});

  });

  api.addFiles('clippy.min.js', 'client');
  api.addFiles('clippy.css', 'client');
  api.addFiles('clippy_additions.js', 'client');
  api.export("clippy");
});

