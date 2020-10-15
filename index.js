const Discord = require('discord.js');
const client = new Discord.Client();
const berichten = require('./berichten.json')
const botConfig = require('./botConfig.json')

client.once('ready', () => {
	console.log(`${client.user.username} is online.`);
	client.user.setActivity("twitch.tv/daanties");
});

client.on("message", async message =>{

	if (message.author.bot) return;

	if(message.channel.type == "dm") return;

  var prefix = botConfig.prefix;

	var messageArray = message.content.split(" ");

	var welkom = berichten.welkom;

	var regel1 = berichten.regel1

	var regel2 = berichten.regel2

	var regel3 = berichten.regel3

	var regeltitle1 = berichten.regeltitle1

	var regeltitle2 = berichten.regeltitle2

	var regeltitle3 = berichten.regeltitle3

	var subscriber = berichten.Subscriber

	var subscribertitel = berichten.Subscribertitel

	var instellingen = berichten.Instellingen

	var instellingentitel = berichten.Instellingentitel

	var regelstitle = berichten.regelstitle

	var regels = berichten.regels

	var socials = berichten.socials

	var planning = berichten.planning

	var contact = berichten.contact

	var discord = berichten.discord

	var picture = berichten.picture

	var titel = berichten.titel
	
	var verjaardag = berichten.verjaardag



	var command = messageArray[0];

	if(command === `${prefix}test`){
		return message.channel.send("Hallo, bot functioneert goed!");
	}

	if(command === `${prefix}RicCed`){
		return message.channel.send("<:Ricced:716779315110346762> <:Kappa:717857622224797706> <:Lul:717857687521460377>");
	}


	if(command === `${prefix}welkom`){
		var botEmbed = new Discord.MessageEmbed()
		    .setTitle(titel)
				.setDescription(welkom)
				.setColor("#fcba03")
				.setThumbnail(picture)
				.setTimestamp()
				.addFields(
					{ name: '\u200B', value: '\u200B' },
					{name:subscribertitel, value:subscriber},
					{ name: '\u200B', value: '\u200B' },
					{name:instellingentitel, value:instellingen},
					{ name: '\u200B', value: '\u200B' },
					{name:regelstitle, value:regels},
				)
				.addFields(
					{ name: '\u200B', value: '\u200B' },
					{name:":date: Planning & Schema", value:planning},
					{ name: '\u200B', value: '\u200B' },
					{name:":e_mail: Contact", value:contact},
					{name:":speech_left: Discord Link", value:discord},
					{name:"Socials", value:socials},



				)
				.setFooter("Bot gemaakt door Raredombo")
		
                if(command === `${prefix}verjaardag`){
				return message.channel.send(botEmbed);
		var botEmbed = new Discord.MessageEmbed()
		    .setTitle(titel)
				.setDescription("Verjaardag Kalender")
				.setColor("#fcba03")
				.setTimestamp()
				.addFields(
					{ name: '\u200B', value: '\u200B' },
					{name:":birthday: join de Silver Squad Verjaardagskalender", value:"Zet je naam in de Silver Squad Verjaardagskalender, zodat we je een cadeautje kunnen geven en kunnen feliciteren op je verjaardag!"},
					{ name: '\u200B', value: '\u200B' },
					{name:"Linkjes", value:berichten.verjaardag}
				         )
				
				.setFooter("Bot gemaakt door Raredombo")

				return message.channel.send(botEmbed);
		}


	}

})

client.login(process.env.token);
