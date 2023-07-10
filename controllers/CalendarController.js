const Event = require("../models/Event");
const moment = require("moment");

const CreateEvent = async (req, res) => {
  console.log(req.body);
  const event = Event({
    user_id: req.params.id,
    ...req.body,
  });
  await event.save();
  res.sendStatus(201);
};
const GetEvent = async (req, res) => {
  // console.log(moment(Date(Date.parse(req.query.start))).format("YYYY-MM-DD"));
  
  const events = await Event.find(
    { user_id: req.params.id } 
  );
  res.send(events);
};

const Delete = async (req, res) => {
  const id = req.params.id;
    try{
        await Event.findByIdAndRemove(id)
        res.status(200).json("Event has been deleted");
    }catch(err){
       res.status(500).json("Echec");
    }
} 
module.exports = { CreateEvent, GetEvent, Delete };
