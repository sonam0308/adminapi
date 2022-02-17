



const Lead = require('../model/leads')

const leadCtrl = {

    createLead: async (req, res) => {

        console.log(req.body)

        const { first_name, last_name, age, address1, address2, city, state, country, mobile_number, email, company_name } = req.body;

        try {
            const emailExit = await Lead.findOne({
                email: req.body.email
            });

            if (emailExit) return res.status(400).send("Email already exists");


            // create new user
            const lead = new Lead({
                first_name, last_name, age, address1, address2, city, state, country, mobile_number, email, company_name
            });

            try {
                const savedLead = await lead.save();
                res.send(savedLead);
            } catch (error) {
                res.status(400).send(error);
            }
        }

        catch (err) {
            return res.status(500).json({ msg: err })
        }

    },



    deleteLead: async (req, res) => {
        try {
            await Lead.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted a Lead" })
        } catch (err) {
            return res.status(500).json({ msg: 'error' })
        }

    },

    updateLead: async (req, res) => {
        console.log(req.body)
        try {
            const { first_name, last_name, age, address1, address2, city, state, country, mobile_number, email, company_name } = req.body;

            await Lead.findOneAndUpdate({ _id: req.params.id }, {
                first_name, last_name, age, address1, address2, city, state, country, mobile_number, email, company_name
            })

            res.json({ msg: "Updated a Lead" })
        } catch (err) {
            return res.status(500).json({ msg: 'update lead' })
        }

    },



    getAll: async (req, res) => {
        try {
            const docs = await Lead.find({});
            return res.status(200).json(docs);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },


    getSinglead: async (req, res) => {
        try {
            const obj = await Lead.findOne({ _id: req.params.id });
            return res.status(200).json(obj);
        } catch (err) {
            return res.status(500).json({ error: err });
        }
    }

}


module.exports = leadCtrl;