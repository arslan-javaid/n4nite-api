               if (!isNumeric(params.id)) {
                    ctx.status = 400;
                    throw new Error('Id must be numeric');
                    }
    
                ctx.throw(401, 'Not Allowed');
                
                return true;
                
                    if(!isNumeric(params.id))
                        ctx.status(200).send({
                            message: message
                        })
                    else
                        res.status(400).send({
                            errors: 'No message property in request body.'
                        })               
            },
        });