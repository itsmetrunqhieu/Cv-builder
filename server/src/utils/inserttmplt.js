const fs = require('fs')
const {cv_tmplt} = require('../models')

const inserttmplt = (tmpltpath,previewdir) => {
    //read html file as a string
    fs.readFile(tmpltpath,'utf-8',async(err,htmlstr)=>{         
        if (err) return err;
        //Find the exact template if exist(avoid duplicate). If not, insert html string to database
        [new_tmplt, created] = await cv_tmplt.findOrCreate({    
            where: {htmlstr},
            default: {previewdir,htmlstr}
        });
    });
    if (created){
        return console.log("Template already exist"); 
    }
    else{
        return console.log("Insert Template successfully");
    }
}

module.export = inserttmplt;
// (Opinion) Use directory instead of string? 
// A html template consist more than 5k character