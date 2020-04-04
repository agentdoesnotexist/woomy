const config = {
  // Discord tokens
  token: '',
  devtoken: '',

  // API keys that are required for some features/commands
  keys: {
    dbl: '', // top.gg key
    yt: '' // youtube API key
  },

  // Users added to this embed get access to developer-level commands
  devs: [''],

  // ID for the support server and the various channels Woomy logs to (leave blank if not used)
  support: {
    id: '',
    logs: '',
    startupLogs: '',
    serverLogs: ''
  },

  // URL of MongoDB database
  mongoDB: 'mongodb://localhost:27017/woomy',

  // Default settings for guilds
  defaultGuildSettings: {
    prefix: '~',
    systemNotice: true,
    modRole: 'Moderator',
    adminRole: 'Administrator'
  },

  // Emojis used by Woomy
  emojis: {
    success: '',
    error: '',
    denied: '',
    search: '',
    crown: '',
    boost: '',
    bot: '',
    status: {
      online: '',
      idle: '',
      dnd: '',
      offline: ''
    }
  },

  // Permission levels
  permLevels: [
    {
      level: 0,
      name: 'User',
      check: () => true
    },

    {
      level: 1,
      name: 'Moderator',
      check: (message) => {
        try {
          if (message.member.roles.cache.has(message.settings.modRole)) return true
        } catch (e) {
          return false
        }
      }
    },

    {
      level: 2,
      name: 'Administrator',
      check: (message) => {
        try {
          if (message.member.roles.cache.has(message.settings.adminRole) || message.member.permissions.has('ADMINISTRATOR')) return true
        } catch (e) {
          return false
        }
      }
    },

    {
      level: 3,
      name: 'Server Owner',

      check: (message) => message.channel.type === 'text' ? (message.guild.ownerID === message.author.id) : false
    }
  ]
}

module.exports = config