Feature('SdtdServer Console');

Scenario('Go to console', (I, consolePage) => {
    I.login('CSMMTesterFixture', 'something');
    I.goToTestServerConsole();
    I.see('Console');
    I.seeElement('.console-window');
    I.seeElement('.console-send-box');
});

Scenario('Execute help command', (I, consolePage) => {
    I.login('CSMMTesterFixture', 'something');
    I.goToTestServerConsole();
    consolePage.executeCommand('help');
    I.waitForElement('.log-line', 10);
    I.see('Executing command \'help\'');
});


Scenario('Execute unknown command', (I, consolePage) => {
    I.login('CSMMTesterFixture', 'something');
    I.goToTestServerConsole();
    consolePage.executeCommand('commandWhichDoesNotExist');
    I.dontSee('Executing command');
})