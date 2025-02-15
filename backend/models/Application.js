const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Application = sequelize.define('Application', {
  loanAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentFrequency: {
    type: DataTypes.ENUM('weekly', 'biweekly', 'monthly'),
    allowNull: false,
  },
  termDays: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  birth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  cellPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  homePhone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.ENUM(
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
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  aptSuite: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  province: {
    type: DataTypes.ENUM(
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
    allowNull: true,
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  proofOfResidence: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  employmentStatus: {
    type: DataTypes.ENUM(
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
    type: DataTypes.ENUM(
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
    type: DataTypes.ENUM('weekly', 'biweekly', 'monthly'),
    allowNull: false,
  },
  isPaid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Application;
