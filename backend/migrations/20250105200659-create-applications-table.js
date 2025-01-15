'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('applications', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      loanAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      paymentFrequency: {
        type: Sequelize.ENUM('weekly', 'biweekly', 'monthly'),
        allowNull: false,
      },
      termDays: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      birth: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      cellPhone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homePhone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gender: {
        type: Sequelize.ENUM(
          'male',
          'female',
          'non-binary',
          'transgender',
          'genderqueer',
          'two-spirit',
          'other',
          'prefer-not'
        ),
        allowNull: false,
      },
      idVerification: {
        type: Sequelize.STRING, // Сохраняем путь к файлу или его имя
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aptSuite: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      province: {
        type: Sequelize.ENUM(
          'AB',
          'BC',
          'MB',
          'NB',
          'NL',
          'NS',
          'ON',
          'PE',
          'QC',
          'SK'
        ),
        allowNull: false,
      },
      postalCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      proofOfResidence: {
        type: Sequelize.STRING, // Сохраняем путь к файлу или его имя
        allowNull: true,
      },
      employmentStatus: {
        type: Sequelize.ENUM(
          'full-time',
          'part-time',
          'self-employed',
          'unemployed',
          'retired',
          'student'
        ),
        allowNull: false,
      },
      monthlyIncomeRange: {
        type: Sequelize.ENUM(
          '0-1000',
          '1001-2000',
          '2001-3000',
          '3001-4000',
          '4001-5000',
          '5001+'
        ),
        allowNull: false,
      },
      incomeFrequency: {
        type: Sequelize.ENUM('weekly', 'biweekly', 'monthly'),
        allowNull: false,
      },
      isPaid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, 
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Applications');
  },
};
