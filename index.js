#!/usr/bin/env node

const figlet = require('figlet');
const chalk = require('chalk');
const boxen = require('boxen');
const gradient = require('gradient-string');
const logUpdate = require('log-update');

("            Jonathan Maillard")
// Text + chalk definitions
const profile = {
    name: chalk.bold(gradient.rainbow("                 Jonathan Maillard")),
    work: chalk.white("Junior WebDev at BeCode.org"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~jona1995"),
    github: chalk.gray("https://github.com/") + chalk.green("JonathanMaillard"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("jonathan-maillard"),
    labelWork: chalk.white.bold("    Work:"),
    labelNpm: chalk.white.bold("     npm:"),
    labelGitHub: chalk.white.bold("  GitHub:"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";



    figlet('  JONATHAN', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
        console.log(gradient.rainbow(boxen("------------------- That's mah name ! -------------------")));
        
        console.log(
            
                boxen(
                    [
                        `${profile.name}`,
                        EMPTYLINE,
                        `${profile.labelWork} ${profile.work}`,
                        EMPTYLINE,
                        `${profile.labelNpm} ${profile.npm}`,
                        `${profile.labelGitHub} ${profile.github}`,
                        `${profile.labelLinkedIn} ${profile.linkedin}`,
                    ].join(NEWLINE),
                    {
                        padding: 1,
                        margin: 0,
                        borderStyle: "doubleSingle",
                        borderColor: "#FF2B00",
                    },
                ),
            
        );

        const frames = ['-', '\\', '|', '/'];
        let i = 0;
        
        
        setInterval(() => {
            const frame = frames[i = ++i % frames.length];

            logUpdate(
                gradient.rainbow(`  ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame} ${frame}`)
            );
        }, 80);
        

        
        
    });







