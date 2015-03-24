
clippy.Agents = ["Bonzi", "Clippy", "F1", "Genie", "Genius", "Links", "Merlin", "Peedy", "Rocky", "Rover"],
clippy.loadRandom = function(callback)
	{

		var agent = this.Agents[Math.floor(Math.random() * this.Agents.length)];
		clippy.load(agent, callback);
	};