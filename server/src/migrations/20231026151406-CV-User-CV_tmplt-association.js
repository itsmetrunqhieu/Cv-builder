'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('CVs',{
      fields: ['owner'],
      type: 'foreign key',
      name: 'CV_User_association',
      references:{
        table: 'Users',
        fields: 'id'
      }
    })
    queryInterface.addConstraint('CVs',{
      fields: ['source'],
      type: 'foreign key',
      name: 'CV_CV_tmplt_association',
      references:{
        table: 'CV_tmplts',
        fields: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('CVs',{
      fields: ['owner'],
      type: 'foreign key',
      name: 'CV_User_association',
      references:{
        table: 'Users',
        fields: 'id'
      }
    })
    queryInterface.removeConstraint('CVs',{
      fields: ['source'],
      type: 'foreign key',
      name: 'CV_CV_tmplt_association',
      references:{
        table: 'CV_tmplts',
        fields: 'id'
      }
    })
  }
};
