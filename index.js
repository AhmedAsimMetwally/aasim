#!/usr/bin/env node

// const clearConsole = require('clear-any-console');
// Clears the console.
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome'); 
const chalk = require('chalk');
const log = console.log;
const twitterClr = chalk.hex(`1da1f2`).bold.inverse;
const linkedinClr = chalk.hex(`0077b5`).bold.inverse;
const githubClr = chalk.hex(`6cc644`).bold.inverse;
const dim = chalk.dim;
const italic = chalk.italic
// Alerts
const sym = require('log-symbols');
const success = chalk.green;
const info = chalk.blue;
const warn = chalk.keyword(`orange`);
const error = chalk.red.bold;
welcome({
   title: 'Ahmed Asim',
   tagLine: `Howdy, nice to meet ya!`,
   description: pkgJSON.description,
   version: pkgJSON.version,
   bgColor: `#FADC00`,
   color: `#000000`,
   bold: true,
   clear: true,
})

log(`
NAME: ${pkgJSON.name}
VERSION: ${pkgJSON.version}
DESCRIPTION: ${pkgJSON.description}
`);

// ${chalk.hex(`00aff0`).bold.inverse(` Ahmed Asim `)}
log(`
${italic(`Senior DevOps Engineer, 29 years old Egyption based on Riyadh KSA I've 4 years of experience in the IT field.
I've worked with different companies with different roles i.e DevOps Engineer,Linux Systems Engineer,
Systems Engineer, Product technology Engineer.`)}

${linkedinClr (` LinkedIn `)}:   ${dim(`https://www.linkedin.com/in/ahmed-asim`)}
${twitterClr (` Twitter `)}:    ${dim(`https://twitter.com/AmAhmedassem`)}
${githubClr (` GitHub: `)}:    ${dim(`https://github.com/AhmedAsimMetwally`)}
`);

log(`
${sym.success} ${success(` SUCCESS `)} Thanks for checking out my CLI.

${sym.info} ${info(` INFO `)} I'm practicing node CLI.

${sym.warning} ${warn(` WARNING `)} Please don't copy me, Be yourself! 

${sym.error} ${error(` ERROR `)} I'm on Holiday, Please contact me next week.
`);