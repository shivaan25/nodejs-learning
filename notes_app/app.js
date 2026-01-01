
const yargs = require('yargs')


const notes = require('./notes')



yargs.command({
    command: 'add',
    describe: 'Add a new node',
    builder:{
        title:{
            describe: 'Note Title ',
            demandOption: true,
            type:'string'
        },
        description:{
            describe : 'Description For notes',
            demandOption : true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title , argv.description)
    }
})
//create a remove command 

yargs.command({
    command:'remove',
    describe:'Remove the note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
//listing of notes command
yargs.command({
    command:'list',
    describe:'Listing of Notes',
    handler(){
       notes.getListofNotes()
    }
})

yargs.command({
    command:'read',
    describe:'printing placeholder message',
    builder:{
        title:{
            describe:'Title of notes that is being read',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.getNotes(argv.title)
    }
})
yargs.parse()

