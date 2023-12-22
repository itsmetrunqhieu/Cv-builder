const inserttmplt = (tmpltpath,previewdir) => {
    const fs = require('fs');
    const {cv_tmplt} = require('../models');
    //read html file as a string
    fs.readFile(tmpltpath,'utf-8',async(err,htmlstr)=>{         
        if (err) 
        {console.error(err);
        return;} 
        //Find the exact template if exist(avoid duplicate). If not, insert html string to database
        [new_tmplt, created] = await cv_tmplt.findOrCreate({    
            where: {htmlstr},
            default: {previewdir,htmlstr}
        });
    });
    if (created){
        console.log("Template already exist"); 
        return;
    }
    else{
        console.log("Insert Template successfully");
        return;
    }
}

module.export = inserttmplt;
// (Opinion) Use directory instead of string? 
// A html template consist more than 5k character