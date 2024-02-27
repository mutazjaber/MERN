const { Author } = require('../models/author.model');


module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({name})
        .then(newlyCreatedAuthor => {
            response.json({ Author: newlyCreatedAuthor })
        })
        .catch(err => response.status(400).json(err))
}


// module.exports.findAllAuthors =(request ,response)=>{
//     Author.find()
//         .then(author=> response.json(author))
//         .catch(err => response.json(err));
//     }
    module.exports.findAllAuthors =(request ,response)=>{
        Author.find().collation({ locale: 'en', strength: 2 }).sort({ name: 1 })
            .then((allAuthors) => {
                response.json({ Authors: allAuthors })
            })
            .catch((err) => {
                response.json(err)
            });
        }



    

module.exports.findSingleAuthor =(request ,response)=>{
    Author.findOne({_id : request.params.id})
    .then(author=> response.json(author))
    .catch(err => response.json(err));
}





module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true })
        .then(updatedAuthor => response.json({Author: updatedAuthor}))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}



