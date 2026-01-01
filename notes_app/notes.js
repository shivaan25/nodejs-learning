const fs = require('fs')
const chalk = require('chalk')

const getNotes = (title) => {
    const notes = loadData()
    const getTask = notes.find((note) => note.title === title)
    if(getTask){
     console.log("Title:" + getTask.title)
    
    console.log("Body:" + getTask.description)
    }
    else{
        console.log(chalk.red.inverse('Title Not Found'))
    }
}

const addNote = (title ,description) => {
    const notes = loadData()
     const duplicateNotes = notes.filter((note) => 
        note.title === title
     )

     if(duplicateNotes.length === 0 ){

        notes.push({
        title: title,
        description: description
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New notes added!!!'))
}else {
    console.log(chalk.red.inverse('Title already Taken'))
}
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadData = () => {
  
  try{
    const databuffer = fs.readFileSync('notes.json')
    const dataToString = databuffer.toString()
    const notesData = JSON.parse(dataToString)
    return notesData
  }
  catch(e){
    return []
  }
}


const removeNotes = (title) => {
    const notes = loadData()
    const notesTokeep = notes.filter((note) =>
      note.title !== title
    )
    saveNotes(notesTokeep)
    if(notes.length === notesTokeep.length){
        console.log(chalk.red.inverse('Title Not Found'))
    }else{
        console.log(chalk.green.inverse('Title Found and removed'))
    }
        
    console.log(chalk.green('Note is removed with given title'))
}



const getListofNotes = () =>{
    console.log(chalk.inverse('Your Notes'))
    const notes = loadData()
     notes.forEach((note) => {
    console.log(note.title)
})
    
}

module.exports ={ 
                    addNotes: addNote,
                    removeNotes: removeNotes,
                    getListofNotes: getListofNotes,
                    getNotes: getNotes
}
