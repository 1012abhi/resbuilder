const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const SkillSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    skillId: {
        type: Schema.Types.ObjectId,
        ref: 'Skill',
        required: true,
    },
}, { timestamps: true })
module.exports = mongoose.model('UserSkill', SkillSchema)