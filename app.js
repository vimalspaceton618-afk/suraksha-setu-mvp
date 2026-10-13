'use strict';

/* Suraksha Setu MVP: all checks are deterministic, local-only heuristics. No AI, analytics, or network API. */
const TEXT = {
  en: {
    skip:'Skip to content', tagline:'Everyday digital safety', language:'Language', needHelp:'Need help now',
    navHome:'Home', navMessage:'Check message', navLink:'Check a link', navHelp:'Get help', navLearn:'Practice', navPrivacy:'Privacy & rules',
    rememberLabel:'Remember:', rememberText:'No checker can guarantee that a message, caller or payment is safe.', localOnly:'Checks run on this device. Your message is not uploaded.',
    homeEyebrow:'DIGITAL SAFETY, MADE PRACTICAL', homeTitle:'Pause. Check. Then decide.', homeLead:'A simple place to check suspicious messages and links, learn safer payment habits, and find official help when something goes wrong.',
    checkMessage:'Check a message', checkMessageDesc:'Paste suspicious text. It stays on this device.', checkLink:'Check a link', checkLinkDesc:'Inspect the address without opening the website.',
    getHelp:'I need help', getHelpDesc:'Find the right next step if money or personal information is at risk.', practiceTitle:'Practice spotting scams', practiceDesc:'Try short real-life examples. No score or data is shared.',
    privacyTitle:'Privacy comes first', privacyDesc:'No account, no ad trackers, no AI, and no upload of what you check.', homeSafetyTitle:'Three rules to remember', rule1Title:'Never share secrets', rule1:'Never share an OTP, UPI PIN, password, or screen-sharing access with someone who contacts you.', rule2Title:'Receiving money does not need your PIN', rule2:'A QR scan or UPI PIN is not required to receive money. Stop if someone tells you otherwise.', rule3Title:'Officials do not “digitally arrest” you', rule3:'End suspicious calls claiming to be police, CBI, ED, a court, or a courier authority. Verify independently.',
    homeNoteTitle:'What this version can and cannot do', homeNote:'This is an early prototype. It checks text and link patterns on your device. It does not monitor calls, WhatsApp, banking apps, or transactions, and it cannot prove a link is safe.',
    messageEyebrow:'LOCAL MESSAGE CHECK', messageTitle:'Check a suspicious message', messageLead:'Paste the message below. The app looks for a small set of common warning signs using transparent rules. Your text is not sent anywhere.',
    messageLabel:'Message text', messagePlaceholder:'Paste the SMS, WhatsApp message, email text, or caller’s written claim here…', messageHelp:'Do not paste passwords, OTPs, full account numbers, or other secrets. A local check is not a guarantee.', scanButton:'Check warning signs', clearButton:'Clear text', exampleButton:'Load example',
    urlEyebrow:'LOCAL LINK CHECK', urlTitle:'Inspect a link before opening it', urlLead:'Enter the address as text. This tool does not visit the website or verify the real owner of the domain.', urlLabel:'Website address', urlPlaceholder:'example.com or https://example.com/path', urlHelp:'Do not open the link just to copy it. If the link is in a message, you can paste its displayed text.', checkLinkButton:'Inspect address', clearLinkButton:'Clear address',
    helpEyebrow:'HELP WITHOUT DELAY', helpTitle:'What happened?', helpLead:'Choose the situation that is closest to yours. You can always contact your bank/payment app and official cybercrime support directly.',
    chooseMessage:'A suspicious message or call', chooseMessageDesc:'You have not sent money yet.', choosePaid:'I sent money or approved a payment', choosePaidDesc:'Act quickly; do not wait for this app.', chooseControl:'Someone is controlling or viewing my phone', chooseControlDesc:'A stranger asked to install an app or share your screen.', chooseInfo:'I shared an OTP, PIN or password', chooseInfoDesc:'Secure affected accounts immediately.',
    officialHelpTitle:'Official help in India', call1930:'Call 1930 — cyber financial fraud', reportOnline:'Open National Cyber Crime Reporting Portal', reportSuspect:'Report a suspicious number, message or URL',
    paidTitle:'If money has left your account', paidLead:'Act now. Reporting quickly may help the bank and authorities take action, but recovery is not guaranteed.', paid1Title:'Call 1930 immediately', paid1:'Keep your phone available and explain that you are reporting financial cyber fraud.', paid2Title:'Contact your bank and payment app', paid2:'Use the number inside the official app or on your bank card. Ask them to secure the account and register a dispute.', paid3Title:'Save evidence', paid3:'Keep the transaction ID, amount, time, UPI ID, phone number and screenshots. Do not edit the originals.', paid4Title:'Complete the official report', paid4:'Use the official portal and retain the acknowledgement number. Never pay a “recovery agent” to get your money back.',
    callTitle:'If someone is pressuring or watching you', call1Title:'End the call or screen share', call1:'Do not obey threats, install remote-access apps, or stay on a video call to “prove” your innocence.', call2Title:'Use another trusted device if needed', call2:'Contact your bank or a trusted person from a device the caller cannot control.', call3Title:'Do not transfer money to “secure” it', call3:'Police, banks and government officers should not ask you to move money to a personal account to prove innocence.',
    sharedTitle:'If you shared an OTP, PIN or password', shared1Title:'Act as if the secret is exposed', shared1:'Change the affected password from a trusted device. If a UPI PIN or banking credential was shared, contact the bank/payment provider immediately.', shared2Title:'Secure access', shared2:'Sign out unknown sessions where possible, remove remote-access apps you did not intentionally install, and review recent transactions.', shared3Title:'Report the incident', shared3:'Call 1930 if money is involved and report at the official cybercrime portal.',
    generalTitle:'If it only looks suspicious', general1Title:'Do not reply, tap, scan or pay', general1:'Do not use the sender’s phone number or link to verify their story.', general2Title:'Verify independently', general2:'Find the organisation’s official contact details yourself or open its official app directly.', general3Title:'Report suspicious communication', general3:'Use the official Sanchar Saathi / Chakshu service or the National Cyber Crime Reporting Portal.',
    helpDisclaimer:'Suraksha Setu is not a bank, police service, or emergency service. It cannot freeze a payment or submit an official complaint for you.',
    learnEyebrow:'SHORT PRACTICE', learnTitle:'Build safer habits', learnLead:'Choose the safest next step. These examples are for learning and are checked locally.', quizQuestion:'Question', quizScore:'Correct answers', quizNext:'Next question', quizRestart:'Try again', quizDone:'Practice complete',
    q1:'A caller says they are police and you must transfer money to avoid arrest. What should you do?', q1a:'Transfer a small amount to prove cooperation', q1b:'End the call and verify independently', q1c:'Keep the video call running', q1why:'Real authorities do not require money transfers to prove innocence. End the call and verify through official channels.',
    q2:'A person says they will send you a refund and asks for your UPI PIN. What is correct?', q2a:'Share the PIN if the person sounds genuine', q2b:'Enter the PIN to receive the refund', q2c:'Do not share the PIN; receiving money does not require it', q2why:'A UPI PIN authorises a payment. Never share it or enter it to receive money.',
    q3:'A message says your account will close in five minutes unless you tap a link. What is safest?', q3a:'Pause and check through the official app or website', q3b:'Tap quickly to avoid losing access', q3c:'Forward the link to a group and ask', q3why:'Urgency is a common manipulation tactic. Verify independently rather than using the message link.',
    q4:'You have already sent money to a scammer. What should you do first?', q4a:'Pay a recovery agent', q4b:'Wait a few days', q4c:'Call 1930 and contact your bank/payment provider immediately', q4why:'Fast reporting may give the bank and authorities a better chance to respond. Recovery is not guaranteed.',
    privacyEyebrow:'PLAIN-LANGUAGE POLICY', privacyHeading:'Your data and security rules', privacyLead:'This prototype is designed to minimise risk, not to collect more information than it needs.',
    policyLocalTitle:'Local-only checks', policyLocal:'Message and link text is analysed in the current page by local JavaScript rules. There is no backend request for the content.', policyNoAI:'No AI or chatbot', policyNoAIText:'This version uses no generative AI, cloud model, or automated conversation. Results come from visible, simple pattern rules.', policyStorage:'Minimal storage', policyStorageText:'The only preference saved is your chosen display language. Checked text and results are not stored by this app. Clearing site data removes the preference.', policyNoPermTitle:'No sensitive permissions', policyNoPerm:'The app does not request contacts, SMS, call logs, microphone, camera, location, accessibility, or screen-capture permissions.', policyNoGuaranteeTitle:'No false promises', policyNoGuarantee:'A warning means a pattern matched, not that fraud is proven. No warning means only that these limited rules found no obvious indicator; it does not mean safe.', policyNextTitle:'Before a public launch', policyNext:'A production release needs an independent security review, threat modelling, penetration testing, signed releases, dependency checks, a vulnerability-reporting process, translated user testing, and a clear incident-response owner.',
    reportTitle:'Official destinations', cyberPortal:'National Cyber Crime Reporting Portal', chakshu:'Sanchar Saathi (Chakshu)', officialNote:'Only enter personal details on a government or provider site after verifying the address yourself.',
    resultHigh:'High caution', resultMed:'Caution advised', resultLow:'No obvious warning signs matched', resultHighLead:'Several strong warning signs were found. Stop and verify independently.', resultMedLead:'Some common warning signs were found. Do not act until you verify independently.', resultLowLead:'These limited rules did not find obvious warning signs. That does not prove this message is genuine.', resultReasons:'What matched', resultActions:'Safer next steps', actionStop:'Do not tap links, scan QR codes, install apps, share secrets, or send money because of this message.', actionVerify:'Verify the claim through the official app or contact details you find yourself.', actionReport:'Report suspicious communication through official channels if appropriate.', actionLow:'Still verify unexpected requests independently. Sophisticated scams may not match these simple rules.',
    urlHigh:'High caution', urlMed:'Caution advised', urlLow:'No obvious technical warning found', urlHighLead:'The address contains strong technical warning signs. Do not enter private information.', urlMedLead:'The address has features that deserve caution. Verify the domain independently.', urlLowLead:'No obvious warning was matched by these simple rules. The site owner and content have not been verified.', urlHost:'Address details', urlReasons:'Warning signs', urlAction:'Do not log in, download files, or pay through a link in an unexpected message. Open the official app/site independently.', invalidUrl:'Please enter a website address beginning with http:// or https://, or a domain such as example.com.', emptyMessage:'Paste a message before checking it.', emptyLink:'Enter an address before checking it.',
    reasonOtp:'The text mentions an OTP, PIN, password, or verification code.', reasonUrgency:'The message uses urgent deadlines or threatens account suspension.', reasonAuthority:'The sender appears to impersonate police, a court, or another authority.', reasonRemote:'The message mentions remote-access software, screen sharing, or installing an app.', reasonLink:'The message contains a web link.', reasonPayment:'The message asks for money, a transfer, a QR scan, or payment approval.', reasonPrize:'The message offers a prize, refund, job, or unusually high return.', reasonHttp:'The address uses unencrypted HTTP rather than HTTPS.', reasonPuny:'The domain uses an internationalised/punycode form. Check the spelling carefully.', reasonIp:'The address uses a raw IP address instead of a familiar domain.', reasonShort:'The address uses a link-shortening service, which hides the final destination.', reasonCred:'The address contains a username or password before the host.', reasonPort:'The address uses an unusual port number.', reasonBrand:'The address contains a familiar brand name inside a different domain. This is not proof of impersonation, but requires independent verification.', reasonLong:'The domain has many subdomain levels. Make sure you identify the actual registered domain.', reasonHyphen:'The domain uses a brand-like name with extra hyphens. Check the exact spelling.',
    noMessageRules:'No common warning rule matched.', noUrlRules:'No obvious technical warning rule matched.', copyReport:'Copy checklist', checklistCopied:'Checklist copied, if clipboard permission is available.', installNote:'Tip: use your browser menu and choose “Install app” or “Add to Home screen” when available.',
  },
  ta: {
    skip:'உள்ளடக்கத்திற்குச் செல்லவும்', tagline:'அன்றாட டிஜிட்டல் பாதுகாப்பு', language:'மொழி', needHelp:'இப்போது உதவி தேவை', navHome:'முகப்பு', navMessage:'செய்தியைச் சரிபார்', navLink:'இணைப்பைச் சரிபார்', navHelp:'உதவி பெறுக', navLearn:'பயிற்சி', navPrivacy:'தனியுரிமை விதிகள்', rememberLabel:'நினைவில் கொள்ளுங்கள்:', rememberText:'எந்தச் சரிபார்ப்பும் செய்தி, அழைப்பாளர் அல்லது பணப்பரிவர்த்தனை பாதுகாப்பானது என்று உறுதி செய்ய முடியாது.', localOnly:'சரிபார்ப்பு உங்கள் சாதனத்திலேயே நடைபெறும். செய்தி பதிவேற்றப்படாது.',
    homeEyebrow:'எளிமையான டிஜிட்டல் பாதுகாப்பு', homeTitle:'நிறுத்துங்கள். சரிபாருங்கள். பிறகு முடிவெடுங்கள்.', homeLead:'சந்தேகமான செய்திகள் மற்றும் இணைப்புகளைச் சரிபார்க்கவும், பாதுகாப்பான பணப்பரிவர்த்தனை பழக்கங்களைக் கற்கவும், சிக்கல் ஏற்பட்டால் அதிகாரப்பூர்வ உதவியைப் பெறவும் ஒரு எளிய இடம்.', checkMessage:'செய்தியைச் சரிபார்', checkMessageDesc:'சந்தேகமான உரையை ஒட்டுங்கள். இது இந்தச் சாதனத்திலேயே இருக்கும்.', checkLink:'இணைப்பைச் சரிபார்', checkLinkDesc:'இணையதளத்தைத் திறக்காமல் முகவரியைப் பாருங்கள்.', getHelp:'எனக்கு உதவி தேவை', getHelpDesc:'பணம் அல்லது தனிப்பட்ட தகவல் ஆபத்தில் இருந்தால் அடுத்த படியைக் கண்டறியுங்கள்.', practiceTitle:'மோசடிகளை அடையாளம் காணப் பழகுங்கள்', practiceDesc:'சிறிய நிகழ்வுகளை முயற்சிக்கவும். மதிப்பெண் அல்லது தரவு பகிரப்படாது.', privacyTitle:'தனியுரிமையே முதன்மை', privacyDesc:'கணக்கு இல்லை, விளம்பரக் கண்காணிப்பு இல்லை, AI இல்லை; நீங்கள் சரிபார்க்கும் உரை பதிவேற்றப்படாது.', homeSafetyTitle:'நினைவில் கொள்ள வேண்டிய மூன்று விதிகள்', rule1Title:'ரகசியங்களைப் பகிர வேண்டாம்', rule1:'உங்களைத் தொடர்புகொள்ளும் ஒருவரிடம் OTP, UPI PIN, கடவுச்சொல் அல்லது திரைப் பகிர்வு அணுகலை ஒருபோதும் பகிர வேண்டாம்.', rule2Title:'பணம் பெற PIN தேவையில்லை', rule2:'பணம் பெற QR ஸ்கேன் அல்லது UPI PIN தேவையில்லை. யாராவது அப்படிச் சொன்னால் நிறுத்துங்கள்.', rule3Title:'அதிகாரிகள் “டிஜிட்டல் கைது” செய்ய மாட்டார்கள்', rule3:'போலீஸ், CBI, ED, நீதிமன்றம் அல்லது கூரியர் அதிகாரி என்று மிரட்டும் அழைப்பை முடித்து, தனியாகச் சரிபாருங்கள்.', homeNoteTitle:'இந்தப் பதிப்பால் என்ன செய்ய முடியும்?', homeNote:'இது ஆரம்ப முன்மாதிரி. உரை மற்றும் இணைப்புகளில் சில எச்சரிக்கை அடையாளங்களைச் சாதனத்திலேயே சரிபார்க்கும். அழைப்புகள், WhatsApp, வங்கி செயலிகள் அல்லது பணப்பரிவர்த்தனைகளை கண்காணிக்காது; இணைப்பு பாதுகாப்பானது என்றும் நிரூபிக்காது.',
    messageEyebrow:'செய்தியைச் சாதனத்திலேயே சரிபார்', messageTitle:'சந்தேகமான செய்தியைச் சரிபார்க்கவும்', messageLead:'கீழே செய்தியை ஒட்டுங்கள். வெளிப்படையான விதிகள் மூலம் சில பொதுவான எச்சரிக்கை அறிகுறிகளைச் சரிபார்க்கும். உரை எங்கும் அனுப்பப்படாது.', messageLabel:'செய்தி உரை', messagePlaceholder:'SMS, WhatsApp, மின்னஞ்சல் அல்லது அழைப்பாளர் கூறியதை இங்கே ஒட்டுங்கள்…', messageHelp:'கடவுச்சொல், OTP, முழுக் கணக்கு எண் அல்லது ரகசியங்களை ஒட்ட வேண்டாம். இந்தச் சரிபார்ப்பு உத்தரவாதமல்ல.', scanButton:'எச்சரிக்கை அறிகுறிகளைச் சரிபார்', clearButton:'உரையை அழி', exampleButton:'உதாரணத்தை ஏற்று',
    urlEyebrow:'இணைப்பைச் சாதனத்திலேயே சரிபார்', urlTitle:'திறப்பதற்கு முன் இணைப்பைப் பாருங்கள்', urlLead:'முகவரியை உரையாக உள்ளிடுங்கள். இந்தக் கருவி இணையதளத்தைத் திறக்காது; உண்மையான உரிமையாளரையும் சரிபார்க்காது.', urlLabel:'இணையதள முகவரி', urlPlaceholder:'example.com அல்லது https://example.com/path', urlHelp:'இணைப்பை நகலெடுக்க அதைத் திறக்க வேண்டாம். செய்தியில் காட்டப்படும் முகவரியை ஒட்டலாம்.', checkLinkButton:'முகவரியைச் சரிபார்', clearLinkButton:'முகவரியை அழி',
    helpEyebrow:'உடனடி வழிகாட்டுதல்', helpTitle:'என்ன நடந்தது?', helpLead:'உங்களுக்கு பொருந்தும் சூழ்நிலையைத் தேர்ந்தெடுக்கவும். உங்கள் வங்கி/பணம் செலுத்தும் செயலியையும் அதிகாரப்பூர்வ சைபர் உதவியையும் நேரடியாகத் தொடர்புகொள்ளலாம்.', chooseMessage:'சந்தேகமான செய்தி அல்லது அழைப்பு', chooseMessageDesc:'நீங்கள் இன்னும் பணம் அனுப்பவில்லை.', choosePaid:'பணம் அனுப்பிவிட்டேன் அல்லது பரிவர்த்தனையை ஒப்புக்கொண்டேன்', choosePaidDesc:'உடனே நடவடிக்கை எடுங்கள்; இந்தச் செயலிக்காக காத்திருக்க வேண்டாம்.', chooseControl:'யாரோ என் தொலைபேசியைக் கட்டுப்படுத்துகிறார் அல்லது பார்க்கிறார்', chooseControlDesc:'ஒரு அந்நியர் செயலி நிறுவவோ திரையைப் பகிரவோ சொன்னார்.', chooseInfo:'OTP, PIN அல்லது கடவுச்சொல்லைப் பகிர்ந்துவிட்டேன்', chooseInfoDesc:'பாதிக்கப்பட்ட கணக்குகளை உடனே பாதுகாக்கவும்.', officialHelpTitle:'இந்தியாவின் அதிகாரப்பூர்வ உதவி', call1930:'1930-ஐ அழைக்கவும் — சைபர் நிதி மோசடி', reportOnline:'தேசிய சைபர் குற்றப் புகார் தளத்தைத் திறக்கவும்', reportSuspect:'சந்தேகமான எண், செய்தி அல்லது URL-ஐப் புகாரளிக்கவும்',
    paidTitle:'உங்கள் கணக்கிலிருந்து பணம் சென்றிருந்தால்', paidLead:'உடனே செயல்படுங்கள். விரைவான புகார் உதவியாக இருக்கலாம்; பணம் திரும்பும் உத்தரவாதம் இல்லை.', paid1Title:'உடனே 1930-ஐ அழைக்கவும்', paid1:'தொலைபேசியை அருகில் வைத்துக் கொண்டு நிதி சைபர் மோசடியைப் புகாரளிப்பதாகச் சொல்லுங்கள்.', paid2Title:'வங்கி மற்றும் பணப்பரிவர்த்தனை செயலியைத் தொடர்புகொள்ளுங்கள்', paid2:'அதிகாரப்பூர்வ செயலி அல்லது வங்கி அட்டையில் உள்ள எண்ணைப் பயன்படுத்துங்கள். கணக்கைப் பாதுகாக்கவும் புகாரைப் பதிவு செய்யவும் கேளுங்கள்.', paid3Title:'ஆதாரங்களைச் சேமிக்கவும்', paid3:'பரிவர்த்தனை ID, தொகை, நேரம், UPI ID, தொலைபேசி எண் மற்றும் திரைப்பிடிப்புகளை வைத்திருங்கள். அசல் ஆதாரங்களை மாற்ற வேண்டாம்.', paid4Title:'அதிகாரப்பூர்வ புகாரை முடிக்கவும்', paid4:'அதிகாரப்பூர்வ தளத்தைப் பயன்படுத்தி ஒப்புகை எண்ணை வைத்திருங்கள். பணத்தை மீட்டுத் தருவதாகக் கூறும் நபருக்கு பணம் செலுத்த வேண்டாம்.',
    callTitle:'யாராவது மிரட்டினால் அல்லது உங்கள் திரையைப் பார்த்தால்', call1Title:'அழைப்பு அல்லது திரைப் பகிர்வை முடிக்கவும்', call1:'மிரட்டலுக்கு இணங்க வேண்டாம்; தொலைநிலை அணுகல் செயலிகளை நிறுவ வேண்டாம்; நிரபராதி என்பதை நிரூபிக்க வீடியோ அழைப்பில் இருக்க வேண்டியதில்லை.', call2Title:'தேவைப்பட்டால் நம்பகமான வேறு சாதனத்தைப் பயன்படுத்தவும்', call2:'அழைப்பாளர் கட்டுப்படுத்த முடியாத சாதனத்திலிருந்து வங்கி அல்லது நம்பகமானவரைத் தொடர்புகொள்ளுங்கள்.', call3Title:'“பாதுகாப்புக்காக” பணம் அனுப்ப வேண்டாம்', call3:'நிரபராதி என்பதை நிரூபிக்க தனிப்பட்ட கணக்குக்கு பணம் மாற்றச் சொல்லக்கூடாது.',
    sharedTitle:'OTP, PIN அல்லது கடவுச்சொல் பகிர்ந்திருந்தால்', shared1Title:'அது வெளிப்பட்டுவிட்டதாகக் கருதுங்கள்', shared1:'நம்பகமான சாதனத்திலிருந்து கடவுச்சொல்லை மாற்றுங்கள். UPI PIN அல்லது வங்கி விவரங்கள் பகிரப்பட்டிருந்தால் உடனே வங்கியைத் தொடர்புகொள்ளுங்கள்.', shared2Title:'அணுகலைப் பாதுகாக்கவும்', shared2:'அறியாத அமர்வுகளிலிருந்து வெளியேறவும்; நீங்கள் நிறுவாத தொலைநிலை அணுகல் செயலிகளை நீக்கவும்; சமீபத்திய பரிவர்த்தனைகளைப் பாருங்கள்.', shared3Title:'சம்பவத்தைப் புகாரளிக்கவும்', shared3:'பணம் தொடர்பானால் 1930-ஐ அழைத்து அதிகாரப்பூர்வ தளத்தில் புகாரளிக்கவும்.',
    generalTitle:'சந்தேகமாக மட்டுமே இருந்தால்', general1Title:'பதிலளிக்க வேண்டாம்; திறக்க, ஸ்கேன் செய்ய அல்லது பணம் செலுத்த வேண்டாம்', general1:'செய்தியில் உள்ள எண் அல்லது இணைப்பைப் பயன்படுத்தி உண்மையைச் சரிபார்க்க வேண்டாம்.', general2Title:'தனியாகச் சரிபாருங்கள்', general2:'அமைப்பின் அதிகாரப்பூர்வ தொடர்பு விவரங்களை நீங்களே கண்டறியுங்கள் அல்லது அதன் அதிகாரப்பூர்வ செயலியைத் திறக்கவும்.', general3Title:'சந்தேகமான தொடர்பைப் புகாரளிக்கவும்', general3:'அதிகாரப்பூர்வ Sanchar Saathi / Chakshu சேவை அல்லது தேசிய சைபர் குற்றத் தளத்தைப் பயன்படுத்துங்கள்.', helpDisclaimer:'Suraksha Setu வங்கி, காவல்துறை அல்லது அவசர சேவை அல்ல. இது பணத்தை முடக்கவோ உங்கள் சார்பில் அதிகாரப்பூர்வ புகார் அளிக்கவோ முடியாது.',
    learnEyebrow:'சிறிய பயிற்சி', learnTitle:'பாதுகாப்பான பழக்கங்களை வளர்த்துக்கொள்ளுங்கள்', learnLead:'பாதுகாப்பான அடுத்த படியைத் தேர்வு செய்யுங்கள். உதாரணங்கள் பயிற்சிக்காக மட்டுமே.', quizQuestion:'கேள்வி', quizScore:'சரியான பதில்கள்', quizNext:'அடுத்த கேள்வி', quizRestart:'மீண்டும் முயற்சி', quizDone:'பயிற்சி முடிந்தது', q1:'ஒருவர் தன்னை போலீஸ் எனக் கூறி, கைது தவிர்க்க பணம் மாற்றச் சொல்கிறார். என்ன செய்வீர்கள்?', q1a:'ஒத்துழைப்பைக் காட்ட சிறிது பணம் அனுப்புவேன்', q1b:'அழைப்பை முடித்து தனியாகச் சரிபார்ப்பேன்', q1c:'வீடியோ அழைப்பைத் தொடர்வேன்', q1why:'நிரபராதி என்பதை நிரூபிக்க உண்மையான அதிகாரிகள் பணம் மாற்றச் சொல்லமாட்டார்கள்.', q2:'பணம் திருப்பித் தருவதாக ஒருவர் கூறி UPI PIN கேட்கிறார். சரியானது எது?', q2a:'உண்மையாகத் தோன்றினால் PIN பகிர்வேன்', q2b:'பணம் பெற PIN உள்ளிடுவேன்', q2c:'PIN பகிர மாட்டேன்; பணம் பெற அது தேவையில்லை', q2why:'UPI PIN பணம் செலுத்த அனுமதிக்கிறது. அதை யாரிடமும் பகிர வேண்டாம்.', q3:'ஐந்து நிமிடங்களில் கணக்கு மூடப்படும்; உடனே இணைப்பைத் தொடவும் என்று செய்தி வருகிறது. பாதுகாப்பானது எது?', q3a:'அதிகாரப்பூர்வ செயலி அல்லது தளத்தில் சரிபார்ப்பேன்', q3b:'அணுகலை இழக்காமல் இருக்க உடனே தொடுவேன்', q3c:'குழுவுக்கு அனுப்பிக் கேட்பேன்', q3why:'அவசரப்படுத்துவது பொதுவான மோசடி உத்தி. தனியாகச் சரிபாருங்கள்.', q4:'ஏற்கெனவே மோசடிக்காரருக்கு பணம் அனுப்பிவிட்டீர்கள். முதலில் என்ன செய்ய வேண்டும்?', q4a:'பணம் மீட்கும் முகவருக்குப் பணம் தருவேன்', q4b:'சில நாட்கள் காத்திருப்பேன்', q4c:'உடனே 1930-ஐ அழைத்து வங்கியையும் தொடர்புகொள்வேன்', q4why:'விரைவான புகார் நடவடிக்கைக்கு உதவலாம். பணம் திரும்பும் உத்தரவாதம் இல்லை.',
    privacyEyebrow:'எளிய மொழியில் கொள்கை', privacyHeading:'உங்கள் தரவு மற்றும் பாதுகாப்பு விதிகள்', privacyLead:'தேவையற்ற தகவலைச் சேகரிப்பதற்குப் பதிலாக அபாயத்தைக் குறைக்க இந்த முன்மாதிரி வடிவமைக்கப்பட்டது.', policyLocalTitle:'சாதனத்திலேயே சரிபார்ப்பு', policyLocal:'செய்தி மற்றும் இணைப்பு உரை உள்ளூர் JavaScript விதிகளால் தற்போதைய பக்கத்தில் ஆய்வு செய்யப்படுகிறது. உரைக்காக சேவையகத்துக்கு கோரிக்கை அனுப்பப்படாது.', policyNoAI:'AI அல்லது chatbot இல்லை', policyNoAIText:'இந்தப் பதிப்பில் உருவாக்கும் AI, cloud model அல்லது தானியங்கி உரையாடல் இல்லை. முடிவுகள் எளிய விதிகளிலிருந்து வருகின்றன.', policyStorage:'குறைந்தபட்ச சேமிப்பு', policyStorageText:'நீங்கள் தேர்ந்தெடுத்த மொழி மட்டும் சேமிக்கப்படும். சரிபார்த்த உரை அல்லது முடிவுகள் சேமிக்கப்படாது.', policyNoPermTitle:'ரகசிய அனுமதிகள் இல்லை', policyNoPerm:'தொடர்புகள், SMS, அழைப்பு பதிவுகள், மைக்ரோஃபோன், கேமரா, இருப்பிடம், accessibility அல்லது திரைப் பதிவு அனுமதி கேட்கப்படாது.', policyNoGuaranteeTitle:'தவறான உறுதிமொழிகள் இல்லை', policyNoGuarantee:'எச்சரிக்கை என்பது ஒரு முறை பொருந்தியது என்பதே தவிர மோசடி நிரூபிக்கப்பட்டது என்பதல்ல. எச்சரிக்கை இல்லாதது பாதுகாப்பு என்று பொருளல்ல.', policyNextTitle:'பொதுமக்கள் பயன்பாட்டிற்கு முன்', policyNext:'தனித்த பாதுகாப்பு ஆய்வு, threat modelling, penetration testing, கையொப்பமிட்ட வெளியீடுகள், dependency சோதனைகள், பாதுகாப்பு குறைபாடு புகார் செயல்முறை மற்றும் மொழி பயனர் சோதனை அவசியம்.', reportTitle:'அதிகாரப்பூர்வ தளங்கள்', cyberPortal:'தேசிய சைபர் குற்றப் புகார் தளம்', chakshu:'Sanchar Saathi (Chakshu)', officialNote:'தனிப்பட்ட விவரங்களை உள்ளிடுவதற்கு முன் அது அதிகாரப்பூர்வ தளமா என நீங்களே சரிபாருங்கள்.',
    resultHigh:'அதிக எச்சரிக்கை', resultMed:'எச்சரிக்கையுடன் இருங்கள்', resultLow:'தெளிவான எச்சரிக்கை அறிகுறி பொருந்தவில்லை', resultHighLead:'பல வலுவான எச்சரிக்கை அறிகுறிகள் உள்ளன. நிறுத்தி தனியாகச் சரிபாருங்கள்.', resultMedLead:'சில பொதுவான எச்சரிக்கை அறிகுறிகள் உள்ளன. சரிபார்க்காமல் செயல்பட வேண்டாம்.', resultLowLead:'இந்தக் குறைந்த விதிகளில் தெளிவான அறிகுறி இல்லை. செய்தி உண்மையானது என இதனால் உறுதி ஆகாது.', resultReasons:'பொருந்திய அறிகுறிகள்', resultActions:'பாதுகாப்பான அடுத்த படிகள்', actionStop:'இச்செய்தியால் இணைப்பைத் திறக்கவோ QR ஸ்கேன் செய்யவோ செயலி நிறுவவோ ரகசியங்களைப் பகிரவோ பணம் அனுப்பவோ வேண்டாம்.', actionVerify:'அதிகாரப்பூர்வ செயலி அல்லது நீங்களே கண்டறிந்த தொடர்பு விவரங்கள் மூலம் சரிபாருங்கள்.', actionReport:'தேவையானால் அதிகாரப்பூர்வ வழிகளில் புகாரளியுங்கள்.', actionLow:'எதிர்பாராத கோரிக்கைகளைத் தனியாகச் சரிபாருங்கள். இந்த எளிய விதிகளால் அனைத்து மோசடிகளையும் கண்டறிய முடியாது.',
    urlHigh:'அதிக எச்சரிக்கை', urlMed:'எச்சரிக்கையுடன் இருங்கள்', urlLow:'தெளிவான தொழில்நுட்ப எச்சரிக்கை இல்லை', urlHighLead:'முகவரியில் வலுவான தொழில்நுட்ப எச்சரிக்கை உள்ளது. தனிப்பட்ட தகவலை உள்ளிட வேண்டாம்.', urlMedLead:'முகவரியில் கவனிக்க வேண்டிய அம்சங்கள் உள்ளன. domain-ஐ தனியாகச் சரிபாருங்கள்.', urlLowLead:'இந்த எளிய விதிகள் தெளிவான எச்சரிக்கையைக் கண்டறியவில்லை. தளத்தின் உரிமையாளர் சரிபார்க்கப்படவில்லை.', urlHost:'முகவரி விவரங்கள்', urlReasons:'எச்சரிக்கை அறிகுறிகள்', urlAction:'எதிர்பாராத செய்தி இணைப்பில் உள்நுழையவோ பதிவிறக்கவோ பணம் செலுத்தவோ வேண்டாம். அதிகாரப்பூர்வ செயலி/தளத்தைத் தனியாகத் திறக்கவும்.', invalidUrl:'http:// அல்லது https:// உடன் தொடங்கும் முகவரி அல்லது example.com போன்ற domain உள்ளிடவும்.', emptyMessage:'சரிபார்ப்பதற்கு முன் செய்தியை ஒட்டுங்கள்.', emptyLink:'சரிபார்ப்பதற்கு முன் முகவரியை உள்ளிடுங்கள்.',
    reasonOtp:'OTP, PIN, கடவுச்சொல் அல்லது சரிபார்ப்புக் குறியீட்டைச் செய்தி குறிப்பிடுகிறது.', reasonUrgency:'அவசர காலக்கெடு அல்லது கணக்கு முடக்கப்படும் என்ற மிரட்டல் உள்ளது.', reasonAuthority:'போலீஸ், நீதிமன்றம் அல்லது அதிகாரி போல நடிக்கலாம்.', reasonRemote:'தொலைநிலை அணுகல், திரைப் பகிர்வு அல்லது செயலி நிறுவலைக் குறிப்பிடுகிறது.', reasonLink:'செய்தியில் இணைய இணைப்பு உள்ளது.', reasonPayment:'பணம், பரிமாற்றம், QR ஸ்கேன் அல்லது கட்டண ஒப்புதலைக் கேட்கிறது.', reasonPrize:'பரிசு, பணத்திருப்பு, வேலை அல்லது மிக அதிக லாபம் என்று கூறுகிறது.', reasonHttp:'HTTPS-க்கு பதிலாக பாதுகாப்பற்ற HTTP உள்ளது.', reasonPuny:'சர்வதேச எழுத்துரு/punycode domain உள்ளது. எழுத்துப்பிழையை கவனமாகப் பாருங்கள்.', reasonIp:'பழக்கமான domain-க்கு பதில் நேரடி IP முகவரி உள்ளது.', reasonShort:'இணைப்பு குறுக்கி சேவை இறுதி முகவரியை மறைக்கலாம்.', reasonCred:'முகவரியில் host-க்கு முன் username அல்லது password உள்ளது.', reasonPort:'வழக்கமற்ற port எண் உள்ளது.', reasonBrand:'வேறு domain-இல் அறிமுகமான brand பெயர் உள்ளது. இது மட்டும் மோசடி ஆதாரம் அல்ல; தனியாகச் சரிபாருங்கள்.', reasonLong:'பல subdomain அடுக்குகள் உள்ளன. உண்மையான registered domain-ஐ உறுதிப்படுத்துங்கள்.', reasonHyphen:'brand போலத் தோன்றும் பெயரில் கூடுதல் hyphen உள்ளது.', noMessageRules:'பொதுவான எச்சரிக்கை விதி பொருந்தவில்லை.', noUrlRules:'தெளிவான தொழில்நுட்ப எச்சரிக்கை விதி பொருந்தவில்லை.', copyReport:'சரிபார்ப்பு பட்டியலை நகலெடு', checklistCopied:'clipboard அனுமதி இருந்தால் பட்டியல் நகலெடுக்கப்பட்டது.', installNote:'குறிப்பு: உலாவி மெனுவில் “Install app” அல்லது “Add to Home screen” தேர்வு செய்யலாம்.'
  },
  hi: {
    skip:'मुख्य सामग्री पर जाएँ', tagline:'रोज़मर्रा की डिजिटल सुरक्षा', language:'भाषा', needHelp:'अभी मदद चाहिए', navHome:'होम', navMessage:'मैसेज जाँचें', navLink:'लिंक जाँचें', navHelp:'मदद लें', navLearn:'अभ्यास', navPrivacy:'गोपनीयता और नियम', rememberLabel:'याद रखें:', rememberText:'कोई जाँच यह गारंटी नहीं दे सकती कि संदेश, कॉल करने वाला या भुगतान सुरक्षित है।', localOnly:'जाँच इसी डिवाइस पर होती है। आपका संदेश अपलोड नहीं होता।',
    homeEyebrow:'आसान डिजिटल सुरक्षा', homeTitle:'रुकें। जाँचें। फिर फैसला करें।', homeLead:'संदिग्ध संदेश और लिंक जाँचने, सुरक्षित भुगतान की आदतें सीखने और समस्या होने पर आधिकारिक मदद पाने की आसान जगह।', checkMessage:'संदेश जाँचें', checkMessageDesc:'संदिग्ध टेक्स्ट पेस्ट करें। वह इसी डिवाइस पर रहता है।', checkLink:'लिंक जाँचें', checkLinkDesc:'वेबसाइट खोले बिना पता देखें।', getHelp:'मुझे मदद चाहिए', getHelpDesc:'पैसे या निजी जानकारी खतरे में हो तो अगला कदम जानें।', practiceTitle:'घोटाले पहचानने का अभ्यास', practiceDesc:'छोटे उदाहरण आज़माएँ। कोई स्कोर या डेटा साझा नहीं होता।', privacyTitle:'गोपनीयता सबसे पहले', privacyDesc:'कोई खाता नहीं, विज्ञापन ट्रैकिंग नहीं, AI नहीं और जाँचा गया टेक्स्ट अपलोड नहीं होता।', homeSafetyTitle:'याद रखने के तीन नियम', rule1Title:'गुप्त जानकारी साझा न करें', rule1:'किसी भी अनजान व्यक्ति को OTP, UPI PIN, पासवर्ड या स्क्रीन साझा करने की अनुमति न दें।', rule2Title:'पैसे पाने के लिए PIN नहीं चाहिए', rule2:'पैसे पाने के लिए QR स्कैन या UPI PIN की ज़रूरत नहीं होती। कोई ऐसा कहे तो रुकें।', rule3Title:'अधिकारी “डिजिटल अरेस्ट” नहीं करते', rule3:'पुलिस, CBI, ED, अदालत या कूरियर अधिकारी बनकर धमकाने वाली कॉल काटें और खुद आधिकारिक तरीके से जाँचें।', homeNoteTitle:'यह संस्करण क्या कर सकता है और क्या नहीं', homeNote:'यह शुरुआती प्रोटोटाइप है। यह टेक्स्ट और लिंक के कुछ संकेत डिवाइस पर जाँचता है। यह कॉल, WhatsApp, बैंक ऐप या लेनदेन की निगरानी नहीं करता और लिंक को सुरक्षित साबित नहीं कर सकता।',
    messageEyebrow:'डिवाइस पर संदेश जाँच', messageTitle:'संदिग्ध संदेश जाँचें', messageLead:'नीचे संदेश पेस्ट करें। सरल और स्पष्ट नियम कुछ आम चेतावनी संकेत खोजेंगे। आपका टेक्स्ट कहीं नहीं भेजा जाता।', messageLabel:'संदेश का टेक्स्ट', messagePlaceholder:'SMS, WhatsApp, ईमेल या कॉल करने वाले का लिखा दावा यहाँ पेस्ट करें…', messageHelp:'पासवर्ड, OTP, पूरा खाता नंबर या अन्य गुप्त जानकारी न डालें। यह जाँच गारंटी नहीं है।', scanButton:'चेतावनी संकेत जाँचें', clearButton:'टेक्स्ट मिटाएँ', exampleButton:'उदाहरण भरें',
    urlEyebrow:'डिवाइस पर लिंक जाँच', urlTitle:'खोलने से पहले लिंक देखें', urlLead:'पता टेक्स्ट के रूप में डालें। यह टूल वेबसाइट नहीं खोलता और असली मालिक की पुष्टि नहीं करता।', urlLabel:'वेबसाइट का पता', urlPlaceholder:'example.com या https://example.com/path', urlHelp:'लिंक कॉपी करने के लिए उसे खोलें नहीं। संदेश में दिख रहा पता पेस्ट कर सकते हैं।', checkLinkButton:'पते की जाँच करें', clearLinkButton:'पता मिटाएँ',
    helpEyebrow:'तुरंत मार्गदर्शन', helpTitle:'क्या हुआ?', helpLead:'अपने हालात के सबसे करीब विकल्प चुनें। आप अपने बैंक/पेमेंट ऐप और आधिकारिक साइबर सहायता से सीधे संपर्क कर सकते हैं।', chooseMessage:'संदिग्ध संदेश या कॉल', chooseMessageDesc:'अभी पैसे नहीं भेजे हैं।', choosePaid:'मैंने पैसे भेजे या भुगतान मंज़ूर किया', choosePaidDesc:'तुरंत कदम उठाएँ; इस ऐप के लिए इंतज़ार न करें।', chooseControl:'कोई मेरा फ़ोन देख या नियंत्रित कर रहा है', chooseControlDesc:'किसी ने ऐप इंस्टॉल करने या स्क्रीन साझा करने को कहा।', chooseInfo:'मैंने OTP, PIN या पासवर्ड साझा किया', chooseInfoDesc:'प्रभावित खातों को तुरंत सुरक्षित करें।', officialHelpTitle:'भारत में आधिकारिक मदद', call1930:'1930 पर कॉल करें — साइबर वित्तीय धोखाधड़ी', reportOnline:'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल खोलें', reportSuspect:'संदिग्ध नंबर, संदेश या URL रिपोर्ट करें',
    paidTitle:'अगर खाते से पैसे निकल गए हैं', paidLead:'अभी कार्रवाई करें। जल्दी रिपोर्ट करने से मदद मिल सकती है, लेकिन पैसे वापस मिलने की गारंटी नहीं है।', paid1Title:'तुरंत 1930 पर कॉल करें', paid1:'फ़ोन पास रखें और बताएँ कि आप वित्तीय साइबर धोखाधड़ी रिपोर्ट कर रहे हैं।', paid2Title:'बैंक और पेमेंट ऐप से संपर्क करें', paid2:'आधिकारिक ऐप या बैंक कार्ड पर दिए नंबर का उपयोग करें। खाते को सुरक्षित करने और विवाद दर्ज करने को कहें।', paid3Title:'सबूत सुरक्षित रखें', paid3:'ट्रांज़ैक्शन ID, रकम, समय, UPI ID, फ़ोन नंबर और स्क्रीनशॉट रखें। मूल सबूत न बदलें।', paid4Title:'आधिकारिक रिपोर्ट पूरी करें', paid4:'आधिकारिक पोर्टल इस्तेमाल करें और acknowledgement number संभालकर रखें। पैसे वापस दिलाने वाले एजेंट को पैसे न दें।',
    callTitle:'अगर कोई धमका रहा है या स्क्रीन देख रहा है', call1Title:'कॉल या स्क्रीन शेयरिंग बंद करें', call1:'धमकी न मानें, remote-access ऐप न इंस्टॉल करें और बेगुनाही साबित करने के लिए वीडियो कॉल पर न रहें।', call2Title:'ज़रूरत हो तो दूसरे भरोसेमंद डिवाइस का इस्तेमाल करें', call2:'ऐसे डिवाइस से बैंक या भरोसेमंद व्यक्ति से संपर्क करें जिसे कॉल करने वाला नियंत्रित न कर सके।', call3Title:'“सुरक्षा” के नाम पर पैसे न भेजें', call3:'बेगुनाही साबित करने के लिए पुलिस, बैंक या सरकारी अधिकारी आपसे निजी खाते में पैसे भेजने को नहीं कहेंगे।',
    sharedTitle:'अगर OTP, PIN या पासवर्ड साझा किया है', shared1Title:'मानें कि जानकारी उजागर हो गई है', shared1:'भरोसेमंद डिवाइस से पासवर्ड बदलें। UPI PIN या बैंक जानकारी साझा की हो तो तुरंत बैंक से संपर्क करें।', shared2Title:'ऐक्सेस सुरक्षित करें', shared2:'अनजान सेशन से लॉग आउट करें, अनचाहे remote-access ऐप हटाएँ और हाल के लेनदेन देखें।', shared3Title:'घटना रिपोर्ट करें', shared3:'पैसे शामिल हों तो 1930 पर कॉल करें और आधिकारिक पोर्टल पर रिपोर्ट करें।',
    generalTitle:'अगर बस संदेह हो', general1Title:'जवाब, क्लिक, स्कैन या भुगतान न करें', general1:'संदेश में दिए नंबर या लिंक से दावे की पुष्टि न करें।', general2Title:'खुद स्वतंत्र रूप से जाँचें', general2:'संगठन की आधिकारिक संपर्क जानकारी खुद खोजें या उसका आधिकारिक ऐप खोलें।', general3Title:'संदिग्ध संपर्क रिपोर्ट करें', general3:'आधिकारिक Sanchar Saathi / Chakshu सेवा या राष्ट्रीय साइबर अपराध पोर्टल इस्तेमाल करें।', helpDisclaimer:'Suraksha Setu बैंक, पुलिस या आपातकालीन सेवा नहीं है। यह भुगतान रोक नहीं सकता और आपकी ओर से आधिकारिक शिकायत दर्ज नहीं कर सकता।',
    learnEyebrow:'छोटा अभ्यास', learnTitle:'सुरक्षित आदतें बनाएँ', learnLead:'सबसे सुरक्षित अगला कदम चुनें। उदाहरण अभ्यास के लिए हैं।', quizQuestion:'प्रश्न', quizScore:'सही उत्तर', quizNext:'अगला प्रश्न', quizRestart:'फिर कोशिश करें', quizDone:'अभ्यास पूरा', q1:'कॉलर कहता है कि वह पुलिस है और गिरफ्तारी से बचने के लिए पैसे भेजने होंगे। आप क्या करेंगे?', q1a:'सहयोग साबित करने के लिए थोड़े पैसे भेजूँगा', q1b:'कॉल काटूँगा और खुद पुष्टि करूँगा', q1c:'वीडियो कॉल जारी रखूँगा', q1why:'असली अधिकारी बेगुनाही साबित करने के लिए पैसे भेजने को नहीं कहते।', q2:'कोई रिफंड भेजने का दावा करके UPI PIN माँगता है। सही कदम क्या है?', q2a:'व्यक्ति असली लगे तो PIN दूँगा', q2b:'पैसे लेने के लिए PIN डालूँगा', q2c:'PIN साझा नहीं करूँगा; पैसे पाने के लिए इसकी ज़रूरत नहीं', q2why:'UPI PIN भुगतान की अनुमति देता है। इसे किसी से साझा न करें।', q3:'संदेश कहता है कि पाँच मिनट में खाता बंद होगा, लिंक खोलें। सबसे सुरक्षित क्या है?', q3a:'आधिकारिक ऐप या वेबसाइट से जाँचूँगा', q3b:'ऐक्सेस बचाने के लिए तुरंत खोलूँगा', q3c:'ग्रुप में लिंक भेजूँगा', q3why:'जल्दी करने का दबाव घोटाले की आम तरकीब है। खुद पुष्टि करें।', q4:'आपने पहले ही घोटालेबाज़ को पैसे भेज दिए। सबसे पहले क्या करें?', q4a:'रिकवरी एजेंट को पैसे दूँगा', q4b:'कुछ दिन इंतज़ार करूँगा', q4c:'तुरंत 1930 और बैंक/पेमेंट प्रदाता से संपर्क करूँगा', q4why:'जल्दी रिपोर्ट करने से कार्रवाई में मदद मिल सकती है। वापसी की गारंटी नहीं है।',
    privacyEyebrow:'सरल भाषा में नीति', privacyHeading:'आपका डेटा और सुरक्षा नियम', privacyLead:'यह प्रोटोटाइप अनावश्यक जानकारी जुटाने के बजाय जोखिम कम करने के लिए बनाया गया है।', policyLocalTitle:'डिवाइस पर ही जाँच', policyLocal:'संदेश और लिंक को मौजूदा पेज में स्थानीय JavaScript नियमों से जाँचा जाता है। टेक्स्ट के लिए सर्वर अनुरोध नहीं भेजा जाता।', policyNoAI:'AI या चैटबॉट नहीं', policyNoAIText:'इस संस्करण में generative AI, cloud model या स्वचालित बातचीत नहीं है। नतीजे सरल नियमों से आते हैं।', policyStorage:'बहुत कम स्टोरेज', policyStorageText:'केवल आपकी चुनी हुई भाषा सेव होती है। जाँचा गया टेक्स्ट और नतीजे सेव नहीं होते।', policyNoPermTitle:'संवेदनशील अनुमति नहीं', policyNoPerm:'ऐप contacts, SMS, call logs, microphone, camera, location, accessibility या screen capture की अनुमति नहीं माँगता।', policyNoGuaranteeTitle:'झूठे वादे नहीं', policyNoGuarantee:'चेतावनी का मतलब है कि कोई पैटर्न मिला, धोखाधड़ी साबित नहीं हुई। चेतावनी न मिलना सुरक्षा का प्रमाण नहीं है।', policyNextTitle:'सार्वजनिक लॉन्च से पहले', policyNext:'स्वतंत्र सुरक्षा समीक्षा, threat modelling, penetration testing, signed releases, dependency checks, vulnerability-reporting प्रक्रिया और भाषा के अनुसार user testing ज़रूरी हैं।', reportTitle:'आधिकारिक वेबसाइटें', cyberPortal:'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल', chakshu:'Sanchar Saathi (Chakshu)', officialNote:'निजी जानकारी डालने से पहले खुद पुष्टि करें कि वेबसाइट आधिकारिक है।',
    resultHigh:'बहुत सावधानी', resultMed:'सावधानी ज़रूरी', resultLow:'कोई स्पष्ट चेतावनी संकेत नहीं मिला', resultHighLead:'कई मज़बूत चेतावनी संकेत मिले। रुकें और स्वतंत्र रूप से जाँचें।', resultMedLead:'कुछ आम चेतावनी संकेत मिले। पुष्टि से पहले कोई कदम न उठाएँ।', resultLowLead:'इन सीमित नियमों को स्पष्ट संकेत नहीं मिला। इससे संदेश असली साबित नहीं होता।', resultReasons:'मिले हुए संकेत', resultActions:'सुरक्षित अगले कदम', actionStop:'इस संदेश के कारण लिंक न खोलें, QR न स्कैन करें, ऐप न इंस्टॉल करें, गुप्त जानकारी साझा या पैसे न भेजें।', actionVerify:'आधिकारिक ऐप या खुद खोजे गए संपर्क से पुष्टि करें।', actionReport:'ज़रूरत हो तो आधिकारिक चैनल से रिपोर्ट करें।', actionLow:'अप्रत्याशित अनुरोधों की खुद पुष्टि करें। ये सरल नियम सभी घोटाले नहीं पहचान सकते।', urlHigh:'बहुत सावधानी', urlMed:'सावधानी ज़रूरी', urlLow:'कोई स्पष्ट तकनीकी चेतावनी नहीं मिली', urlHighLead:'पते में मज़बूत तकनीकी चेतावनी संकेत हैं। निजी जानकारी न डालें।', urlMedLead:'पते में सावधानी योग्य चीज़ें हैं। डोमेन को स्वतंत्र रूप से जाँचें।', urlLowLead:'सरल नियमों को स्पष्ट चेतावनी नहीं मिली। साइट के मालिक की पुष्टि नहीं हुई।', urlHost:'पते का विवरण', urlReasons:'चेतावनी संकेत', urlAction:'अनजान संदेश के लिंक से लॉग इन, डाउनलोड या भुगतान न करें। आधिकारिक ऐप/वेबसाइट खुद खोलें।', invalidUrl:'http:// या https:// से शुरू होने वाला पता या example.com जैसा डोमेन डालें।', emptyMessage:'जाँच से पहले संदेश पेस्ट करें।', emptyLink:'जाँच से पहले पता डालें।', reasonOtp:'संदेश में OTP, PIN, पासवर्ड या verification code का उल्लेख है।', reasonUrgency:'जल्दी करने की समय-सीमा या खाता बंद करने की धमकी है।', reasonAuthority:'भेजने वाला पुलिस, अदालत या अधिकारी होने का नाटक कर सकता है।', reasonRemote:'Remote-access सॉफ़्टवेयर, screen sharing या ऐप इंस्टॉल करने का ज़िक्र है।', reasonLink:'संदेश में वेब लिंक है।', reasonPayment:'पैसे, ट्रांसफर, QR स्कैन या भुगतान मंज़ूरी माँगी गई है।', reasonPrize:'इनाम, रिफंड, नौकरी या असामान्य रूप से अधिक लाभ का दावा है।', reasonHttp:'पता HTTPS के बजाय HTTP इस्तेमाल करता है।', reasonPuny:'डोमेन internationalised/punycode रूप में है। वर्तनी ध्यान से जाँचें।', reasonIp:'पता सामान्य डोमेन के बजाय सीधे IP address का उपयोग करता है।', reasonShort:'Link shortener अंतिम पता छिपा सकता है।', reasonCred:'होस्ट से पहले पते में username या password है।', reasonPort:'असामान्य port number है।', reasonBrand:'किसी दूसरे डोमेन में जाना-पहचाना brand नाम है। यह अपने आप में धोखाधड़ी का प्रमाण नहीं है; जाँचें।', reasonLong:'कई subdomain स्तर हैं। असली registered domain पहचानें।', reasonHyphen:'डोमेन में brand-जैसे नाम के साथ अतिरिक्त hyphen हैं।', noMessageRules:'कोई सामान्य चेतावनी नियम मेल नहीं खाया।', noUrlRules:'कोई स्पष्ट तकनीकी चेतावनी नियम मेल नहीं खाया।', copyReport:'जाँच सूची कॉपी करें', checklistCopied:'क्लिपबोर्ड अनुमति उपलब्ध होने पर सूची कॉपी हुई।', installNote:'सुझाव: ब्राउज़र मेनू में “Install app” या “Add to Home screen” चुनें, यदि उपलब्ध हो।'
  }
};

let lang = 'en';
let page = 'home';
let helpType = 'general';
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
const app = document.getElementById('app');
const t = (key) => (TEXT[lang] && TEXT[lang][key]) || TEXT.en[key] || key;

try {
  const saved = localStorage.getItem('suraksha-setu-language');
  if (saved && TEXT[saved]) lang = saved;
} catch (_) { /* Preference storage is optional. */ }

document.getElementById('language-select').value = lang;
document.documentElement.lang = lang;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function setPage(next) {
  page = next;
  if (page !== 'help') helpType = 'general';
  if (page === 'learn') { quizIndex = 0; quizScore = 0; quizAnswered = false; }
  render();
  document.getElementById('main').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
function button(label, action, cls='button') { return `<button type="button" class="${cls}" data-action="${action}">${label}</button>`; }
function pageHeading(eyebrow, title, lead) { return `<div class="page-heading"><p class="eyebrow">${t(eyebrow)}</p><h1>${t(title)}</h1><p>${t(lead)}</p></div>`; }
function cardLink(icon, title, desc, target) { return `<button type="button" class="action-card" data-page="${target}"><span class="card-symbol" aria-hidden="true">${icon}</span><strong>${t(title)}</strong><span>${t(desc)}</span></button>`; }

function renderHome() {
  return `
    <section class="hero" aria-labelledby="home-title">
      <div><p class="eyebrow">${t('homeEyebrow')}</p><h1 id="home-title">${t('homeTitle')}</h1><p class="lead">${t('homeLead')}</p>
        <div class="button-row"><button class="button" data-page="message">${t('checkMessage')} →</button><button class="button button-secondary" data-page="help">${t('getHelp')}</button></div>
      </div><div class="hero-mark" aria-hidden="true"><span>✓</span></div>
    </section>
    <section class="section" aria-labelledby="quick-actions"><div class="section-head"><div><p class="eyebrow">01 / ${lang==='ta'?'தொடங்குங்கள்':lang==='hi'?'शुरू करें':'GET STARTED'}</p><h2 id="quick-actions">${lang==='ta'?'உங்களுக்கு என்ன உதவி வேண்டும்?':lang==='hi'?'आपको किस मदद की ज़रूरत है?':'What do you need help with?'}</h2></div></div>
      <div class="grid grid-3">${cardLink('▤','checkMessage','checkMessageDesc','message')}${cardLink('↗','checkLink','checkLinkDesc','link')}${cardLink('!','getHelp','getHelpDesc','help')}</div>
    </section>
    <section class="section"><div class="section-head"><div><p class="eyebrow">02 / ${lang==='ta'?'பாதுகாப்பான பழக்கங்கள்':lang==='hi'?'सुरक्षित आदतें':'SAFER HABITS'}</p><h2>${t('homeSafetyTitle')}</h2></div></div>
      <div class="grid grid-3"><article class="card"><span class="card-symbol" aria-hidden="true">01</span><h3>${t('rule1Title')}</h3><p>${t('rule1')}</p></article><article class="card"><span class="card-symbol" aria-hidden="true">02</span><h3>${t('rule2Title')}</h3><p>${t('rule2')}</p></article><article class="card"><span class="card-symbol" aria-hidden="true">03</span><h3>${t('rule3Title')}</h3><p>${t('rule3')}</p></article></div>
    </section>
    <section class="section grid grid-2"><article class="card"><span class="card-symbol" aria-hidden="true">✓</span><h3>${t('practiceTitle')}</h3><p>${t('practiceDesc')}</p><button class="text-button" data-page="learn">${lang==='ta'?'பயிற்சியைத் தொடங்கு':lang==='hi'?'अभ्यास शुरू करें':'Start practice'} →</button></article><article class="card"><span class="card-symbol" aria-hidden="true">▣</span><h3>${t('privacyTitle')}</h3><p>${t('privacyDesc')}</p><button class="text-button" data-page="privacy">${lang==='ta'?'தரவு விதிகளைப் படிக்கவும்':lang==='hi'?'डेटा नियम पढ़ें':'Read data rules'} →</button></article></section>
    <section class="section notice"><strong>${t('homeNoteTitle')}</strong><p>${t('homeNote')}</p></section>
    <p class="help-text">${t('installNote')}</p>`;
}
function renderMessage() {
  return `${pageHeading('messageEyebrow','messageTitle','messageLead')}
    <section class="form-card"><label class="field-label" for="message-input">${t('messageLabel')}</label><textarea id="message-input" maxlength="10000" placeholder="${t('messagePlaceholder')}" autocomplete="off" autocapitalize="off" spellcheck="true"></textarea><p class="help-text">${t('messageHelp')}</p>
      <div class="form-actions"><button class="button" data-action="scan-message">${t('scanButton')}</button><button class="button button-secondary" data-action="load-example">${t('exampleButton')}</button><button class="button button-secondary" data-action="clear-message">${t('clearButton')}</button></div>
      <div id="message-result" aria-live="polite"></div>
    </section>
    <section class="section notice"><strong>${lang==='ta'?'முக்கியம்':lang==='hi'?'ज़रूरी बात':'Important'}</strong><p>${t('actionLow')}</p></section>`;
}
function renderLink() {
  return `${pageHeading('urlEyebrow','urlTitle','urlLead')}
    <section class="form-card"><label class="field-label" for="url-input">${t('urlLabel')}</label><input id="url-input" type="text" inputmode="url" maxlength="2048" placeholder="${t('urlPlaceholder')}" autocomplete="off" autocapitalize="off" spellcheck="false"><p class="help-text">${t('urlHelp')}</p>
      <div class="form-actions"><button class="button" data-action="scan-link">${t('checkLinkButton')}</button><button class="button button-secondary" data-action="clear-link">${t('clearLinkButton')}</button></div>
      <div id="link-result" aria-live="polite"></div>
    </section>
    <section class="section notice"><strong>${lang==='ta'?'நினைவில் கொள்ளுங்கள்':lang==='hi'?'याद रखें':'Remember'}</strong><p>${t('urlAction')}</p></section>`;
}
function helpContent() {
  const opts = `<div class="choice-grid">
    <button class="choice" data-help-type="general">${t('chooseMessage')}<small>${t('chooseMessageDesc')}</small></button>
    <button class="choice" data-help-type="paid">${t('choosePaid')}<small>${t('choosePaidDesc')}</small></button>
    <button class="choice" data-help-type="control">${t('chooseControl')}<small>${t('chooseControlDesc')}</small></button>
    <button class="choice" data-help-type="shared">${t('chooseInfo')}<small>${t('chooseInfoDesc')}</small></button>
  </div>`;
  const sets = {
    paid: ['paidTitle','paidLead',[['paid1Title','paid1'],['paid2Title','paid2'],['paid3Title','paid3'],['paid4Title','paid4']]],
    control: ['callTitle',null,[['call1Title','call1'],['call2Title','call2'],['call3Title','call3']]],
    shared: ['sharedTitle',null,[['shared1Title','shared1'],['shared2Title','shared2'],['shared3Title','shared3']]],
    general: ['generalTitle',null,[['general1Title','general1'],['general2Title','general2'],['general3Title','general3']]]
  };
  const s = sets[helpType] || sets.general;
  const steps = `<section class="section"><div class="section-head"><div><p class="eyebrow">${lang==='ta'?'அடுத்த படிகள்':lang==='hi'?'अगले कदम':'NEXT STEPS'}</p><h2>${t(s[0])}</h2>${s[1]?`<p>${t(s[1])}</p>`:''}</div></div><div class="steps">${s[2].map(([title,desc])=>`<article class="step"><strong>${t(title)}</strong><p>${t(desc)}</p></article>`).join('')}</div></section>`;
  return `${pageHeading('helpEyebrow','helpTitle','helpLead')}${opts}${steps}
    <section class="section card"><h2>${t('officialHelpTitle')}</h2><div class="button-row"><a class="button button-danger" href="tel:1930">${t('call1930')}</a><a class="button button-secondary" href="https://www.cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">${t('reportOnline')} ↗</a><a class="button button-secondary" href="https://cybercrime.gov.in/Webform/cyber_suspect.aspx" target="_blank" rel="noopener noreferrer">${t('reportSuspect')} ↗</a></div><p class="help-text">${t('helpDisclaimer')}</p></section>`;
}
const QUESTIONS = [
  {q:'q1', a:['q1a','q1b','q1c'], correct:1, why:'q1why'},
  {q:'q2', a:['q2a','q2b','q2c'], correct:2, why:'q2why'},
  {q:'q3', a:['q3a','q3b','q3c'], correct:0, why:'q3why'},
  {q:'q4', a:['q4a','q4b','q4c'], correct:2, why:'q4why'}
];
function renderLearn() {
  const done = quizIndex >= QUESTIONS.length;
  if (done) return `${pageHeading('learnEyebrow','quizDone','learnLead')}<section class="form-card"><h2>${t('quizScore')}: ${quizScore} / ${QUESTIONS.length}</h2><p>${quizScore===QUESTIONS.length?(lang==='ta'?'அருமை! பாதுகாப்பான தேர்வுகள்.':lang==='hi'?'बहुत बढ़िया! सुरक्षित चुनाव।':'Great work. You chose the safer options.'):(lang==='ta'?'விதிகளை மறுபடியும் படித்து மீண்டும் முயற்சிக்கவும்.':lang==='hi'?'नियम फिर पढ़ें और दोबारा कोशिश करें।':'Review the rules and try again.')}</p><button class="button" data-action="quiz-restart">${t('quizRestart')}</button></section>`;
  const q = QUESTIONS[quizIndex];
  return `${pageHeading('learnEyebrow','learnTitle','learnLead')}<section class="form-card"><p class="eyebrow">${t('quizQuestion')} ${quizIndex+1} / ${QUESTIONS.length}</p><h2>${t(q.q)}</h2><div id="quiz-options">${q.a.map((key, i)=>`<button class="quiz-option" data-action="quiz-answer" data-answer="${i}" ${quizAnswered?'disabled':''}>${t(key)}</button>`).join('')}</div>${quizAnswered?`<div class="quiz-feedback" role="status"><strong>${quizScore>0 && QUESTIONS[quizIndex].correct===-1?'':(lang==='ta'?'விளக்கம்':lang==='hi'?'समझें':'Why this matters')}:</strong> ${t(q.why)}<p>${t('quizScore')}: ${quizScore} / ${quizIndex+1}</p><button class="button" data-action="quiz-next">${quizIndex===QUESTIONS.length-1?t('quizDone'):t('quizNext')} →</button></div>`:''}</section>`;
}
function renderPrivacy() {
  const rows = [['policyLocalTitle','policyLocal'],['policyNoAI','policyNoAIText'],['policyStorage','policyStorageText'],['policyNoPermTitle','policyNoPerm'],['policyNoGuaranteeTitle','policyNoGuarantee'],['policyNextTitle','policyNext']];
  return `${pageHeading('privacyEyebrow','privacyHeading','privacyLead')}<section class="card">${rows.map(([h,p])=>`<div class="policy-row"><strong>${t(h)}</strong><p>${t(p)}</p></div>`).join('')}</section>
    <section class="section card"><h2>${t('reportTitle')}</h2><p><a href="https://www.cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">${t('cyberPortal')} ↗</a></p><p><a href="https://sancharsaathi.gov.in/" target="_blank" rel="noopener noreferrer">${t('chakshu')} ↗</a></p><p class="help-text">${t('officialNote')}</p></section>`;
}
function render() {
  document.documentElement.lang = lang;
  document.title = `Suraksha Setu — ${({home:t('navHome'),message:t('navMessage'),link:t('navLink'),help:t('navHelp'),learn:t('navLearn'),privacy:t('navPrivacy')})[page] || t('tagline')}`;
  document.querySelectorAll('[data-i18n]').forEach((el) => { const key = el.getAttribute('data-i18n'); el.textContent = t(key); });
  document.querySelectorAll('.nav-item').forEach((el) => {
    const active = el.dataset.page === page;
    el.classList.toggle('is-active', active);
    if (active) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
  });
  const views = {home:renderHome, message:renderMessage, link:renderLink, help:renderHelp, learn:renderLearn, privacy:renderPrivacy};
  app.innerHTML = (views[page] || renderHome)();
  if (page === 'help') document.querySelectorAll('[data-help-type]').forEach((el) => el.classList.toggle('is-selected', el.dataset.helpType === helpType));
}
function renderHelp() { return helpContent(); }

const MESSAGE_RULES = [
  { key:'reasonOtp', re:/\b(?:otp|one[ -]?time password|verification code|passcode|upi\s*pin|pin|password|share (?:the )?(?:code|otp|pin))\b|\b(?:ओटीपी|ओटिपी|पासवर्ड|पिन|otp|பின்|கடவுச்சொல்|ஒருமுறை கடவுச்சொல்)\b/i, points:3 },
  { key:'reasonUrgency', re:/\b(?:urgent|immediately|within \d+ minutes?|account.{0,18}(?:block|suspend|close|expire)|will be blocked|last warning|act now|limited time|आज ही|तुरंत|खाता बंद|अभी करें|உடனே|கணக்கு முடக்க|இன்றே)\b/i, points:2 },
  { key:'reasonAuthority', re:/\b(?:police|cbi|ed officer|enforcement directorate|digital arrest|arrest warrant|court order|customs officer|cyber police|पुलिस|गिरफ्तार|डिजिटल अरेस्ट|காவல்துறை|கைது|டிஜிட்டல் கைது)\b/i, points:3 },
  { key:'reasonRemote', re:/\b(?:anydesk|teamviewer|quick.?support|remote access|screen.?share|install (?:this |the )?app|download apk|enable accessibility|स्क्रीन शेयर|रिमोट एक्सेस|திரையைப் பகிர|செயலி நிறுவ)\b/i, points:3 },
  { key:'reasonLink', re:/https?:\/\/|www\.|\b[a-z0-9-]+\.(?:com|in|net|org|co|io|app|xyz|site|top|click|info)\b/i, points:1 },
  { key:'reasonPayment', re:/\b(?:send money|transfer (?:money|funds)|pay now|upi collect|collect request|scan (?:this )?qr|approve payment|refund fee|processing fee|bank details|भेजें|पैसे भेज|भुगतान करें|பணம் அனுப்பு|பணம் செலுத்த|qr ஸ்கேன்)\b/i, points:2 },
  { key:'reasonPrize', re:/\b(?:you (?:have )?won|winner|lottery|prize money|guaranteed returns?|double your money|work from home.*salary|job offer|cashback|refund|इनाम|लॉटरी|रिफंड|பரிசு|பணம் திரும்ப|வேலை வாய்ப்பு)\b/i, points:2 }
];
function scanMessage(text) {
  const found = MESSAGE_RULES.filter((r) => r.re.test(text));
  const score = found.reduce((sum, item) => sum + item.points, 0);
  const highDirect = found.some((r) => ['reasonOtp','reasonAuthority','reasonRemote'].includes(r.key));
  const level = (score >= 4 || highDirect && score >= 3) ? 'high' : score >= 2 ? 'medium' : 'low';
  return {level, keys: found.map((r) => r.key)};
}
function renderMessageResult(result) {
  const level = result.level;
  const title = level==='high'?t('resultHigh'):level==='medium'?t('resultMed'):t('resultLow');
  const lead = level==='high'?t('resultHighLead'):level==='medium'?t('resultMedLead'):t('resultLowLead');
  const keys = result.keys.length ? result.keys : [];
  const reasons = keys.length ? keys.map((key) => `<li>${t(key)}</li>`).join('') : `<li>${t('noMessageRules')}</li>`;
  const actions = level==='high' ? [t('actionStop'),t('actionVerify'),t('actionReport')] : level==='medium' ? [t('actionStop'),t('actionVerify'),t('actionReport')] : [t('actionLow'),t('actionVerify')];
  return `<section class="result"><div class="result-head result-${level}"><span class="result-symbol" aria-hidden="true">${level==='high'?'!':level==='medium'?'?':'i'}</span><div><h3>${title}</h3><p>${lead}</p></div></div><div class="result-body"><h3>${t('resultReasons')}</h3><ul>${reasons}</ul><h3 class="result-top-gap">${t('resultActions')}</h3><ul>${actions.map((a)=>`<li>${a}</li>`).join('')}</ul></div><p class="result-footnote">${t('rememberText')}</p></section>`;
}
const KNOWN_SHORTENERS = new Set(['bit.ly','tinyurl.com','t.co','goo.gl','ow.ly','is.gd','cutt.ly','rb.gy','shorturl.at','lnkd.in','buff.ly']);
const BRANDS = ['google','paytm','phonepe','gpay','amazon','sbi','hdfc','icici','axisbank','npci','aadhaar','uidai','income-tax','incometax','flipkart','whatsapp','microsoft','apple','irctc','jio','airtel'];
function scanUrl(raw) {
  const input = raw.trim();
  let url;
  try {
    if (/^[a-z][a-z0-9+.-]*:/i.test(input)) url = new URL(input);
    else url = new URL(`https://${input}`);
  } catch (_) { return {invalid:true}; }
  if (!['http:','https:'].includes(url.protocol)) return {invalid:true};
  const host = url.hostname.toLowerCase().replace(/\.$/, '');
  if (!host || !host.includes('.')) return {invalid:true};
  const found = [];
  let points = 0;
  const add = (key, value) => { found.push(key); points += value; };
  if (url.protocol === 'http:') add('reasonHttp', 2);
  if (host.includes('xn--')) add('reasonPuny', 2);
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host) || /^\[[0-9a-f:]+\]$/i.test(host)) add('reasonIp', 2);
  if (KNOWN_SHORTENERS.has(host)) add('reasonShort', 2);
  if (url.username || url.password) add('reasonCred', 4);
  if (url.port && !((url.protocol==='https:' && url.port==='443') || (url.protocol==='http:' && url.port==='80'))) add('reasonPort', 2);
  const parts = host.split('.');
  if (parts.length >= 5) add('reasonLong', 1);
  const brandMention = BRANDS.find((brand) => host.includes(brand));
  const validRoots = {
    google:['google.com','google.co.in'], paytm:['paytm.com'], phonepe:['phonepe.com'], gpay:['google.com','google.co.in'], amazon:['amazon.in','amazon.com'], sbi:['sbi.co.in','onlinesbi.sbi'], hdfc:['hdfcbank.com'], icici:['icicibank.com'], axisbank:['axisbank.com'], npci:['npci.org.in'], aadhaar:['uidai.gov.in'], uidai:['uidai.gov.in'], 'income-tax':['incometax.gov.in'], incometax:['incometax.gov.in'], flipkart:['flipkart.com'], whatsapp:['whatsapp.com'], microsoft:['microsoft.com'], apple:['apple.com'], irctc:['irctc.co.in'], jio:['jio.com'], airtel:['airtel.in']
  };
  if (brandMention) {
    const allowed = validRoots[brandMention] || [];
    if (!allowed.some((root) => host === root || host.endsWith(`.${root}`))) add('reasonBrand', 3);
  }
  if (/(?:bank|pay|secure|verify|kyc|login|update|account)/i.test(host) && host.includes('-')) add('reasonHyphen', 1);
  // Avoid double counting an exact same rule if patterns overlap.
  const keys = [...new Set(found)];
  points = keys.reduce((sum, key) => ({reasonHttp:2,reasonPuny:2,reasonIp:2,reasonShort:2,reasonCred:4,reasonPort:2,reasonLong:1,reasonBrand:3,reasonHyphen:1}[key] + sum), 0);
  const level = (keys.includes('reasonCred') || points >= 4) ? 'high' : points >= 2 ? 'medium' : 'low';
  return {invalid:false, host, protocol:url.protocol.replace(':','').toUpperCase(), level, keys, port:url.port || (url.protocol==='https:'?'443':'80')};
}
function renderUrlResult(result) {
  if (result.invalid) return `<section class="result"><div class="result-head result-high"><span class="result-symbol">!</span><div><h3>${t('resultHigh')}</h3><p>${t('invalidUrl')}</p></div></div></section>`;
  const level = result.level;
  const title = level==='high'?t('urlHigh'):level==='medium'?t('urlMed'):t('urlLow');
  const lead = level==='high'?t('urlHighLead'):level==='medium'?t('urlMedLead'):t('urlLowLead');
  const reasons = result.keys.length ? result.keys.map((key)=>`<li>${t(key)}</li>`).join('') : `<li>${t('noUrlRules')}</li>`;
  return `<section class="result"><div class="result-head result-${level}"><span class="result-symbol" aria-hidden="true">${level==='high'?'!':level==='medium'?'?':'i'}</span><div><h3>${title}</h3><p>${lead}</p></div></div><div class="result-body"><h3>${t('urlHost')}</h3><p><span class="inline-code">${escapeHTML(result.host)}</span> · ${escapeHTML(result.protocol)} · ${escapeHTML(result.port)}</p><h3>${t('urlReasons')}</h3><ul>${reasons}</ul><p class="result-top-gap">${t('urlAction')}</p></div><p class="result-footnote">${t('rememberText')}</p></section>`;
}

document.addEventListener('click', (event) => {
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) { event.preventDefault(); setPage(pageButton.dataset.page); return; }
  const helpChoice = event.target.closest('[data-help-type]');
  if (helpChoice) { helpType = helpChoice.dataset.helpType; render(); return; }
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === 'scan-message') {
    const text = document.getElementById('message-input').value;
    const out = document.getElementById('message-result');
    if (!text.trim()) { out.innerHTML = `<p class="notice" role="alert">${t('emptyMessage')}</p>`; return; }
    out.innerHTML = renderMessageResult(scanMessage(text));
  }
  if (action === 'load-example') {
    document.getElementById('message-input').value = lang==='ta' ? 'உங்கள் வங்கி கணக்கு இன்று முடக்கப்படும். சரிபார்க்க இந்த இணைப்பைத் திறந்து OTP மற்றும் UPI PIN பகிரவும்: https://secure-kyc.example.xyz' : lang==='hi' ? 'आपका बैंक खाता आज बंद हो जाएगा। सत्यापन के लिए लिंक खोलकर OTP और UPI PIN साझा करें: https://secure-kyc.example.xyz' : 'URGENT: Your bank account will be blocked today. Open this link to update KYC and share your OTP and UPI PIN: https://secure-kyc.example.xyz';
    document.getElementById('message-input').focus();
  }
  if (action === 'clear-message') { document.getElementById('message-input').value=''; document.getElementById('message-result').replaceChildren(); document.getElementById('message-input').focus(); }
  if (action === 'scan-link') {
    const text = document.getElementById('url-input').value;
    const out = document.getElementById('link-result');
    if (!text.trim()) { out.innerHTML = `<p class="notice" role="alert">${t('emptyLink')}</p>`; return; }
    out.innerHTML = renderUrlResult(scanUrl(text));
  }
  if (action === 'clear-link') { document.getElementById('url-input').value=''; document.getElementById('link-result').replaceChildren(); document.getElementById('url-input').focus(); }
  if (action === 'quiz-answer' && !quizAnswered) {
    const selected = Number(actionButton.dataset.answer);
    const question = QUESTIONS[quizIndex];
    quizAnswered = true;
    if (selected === question.correct) quizScore++;
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((el, index) => { el.disabled = true; if (index===question.correct) el.classList.add('correct'); else if (index===selected) el.classList.add('incorrect'); });
    const feedback = document.createElement('div'); feedback.className = 'quiz-feedback'; feedback.setAttribute('role','status');
    feedback.innerHTML = `<strong>${lang==='ta'?'விளக்கம்':lang==='hi'?'समझें':'Why this matters'}:</strong> ${t(question.why)}<p>${t('quizScore')}: ${quizScore} / ${quizIndex+1}</p><button class="button" data-action="quiz-next">${quizIndex===QUESTIONS.length-1?t('quizDone'):t('quizNext')} →</button>`;
    document.querySelector('.form-card').appendChild(feedback);
  }
  if (action === 'quiz-next') { quizIndex++; quizAnswered = false; render(); }
  if (action === 'quiz-restart') { quizIndex=0; quizScore=0; quizAnswered=false; render(); }
});

document.getElementById('language-select').addEventListener('change', (event) => {
  const selected = event.target.value;
  if (!TEXT[selected]) return;
  const currentMessage = document.getElementById('message-input')?.value || '';
  const currentUrl = document.getElementById('url-input')?.value || '';
  lang = selected;
  try { localStorage.setItem('suraksha-setu-language', lang); } catch (_) { /* Language preference remains session-only if storage is blocked. */ }
  render();
  // Preserve in-progress input across a language switch; results are cleared and can be rechecked.
  if (page === 'message' && currentMessage) document.getElementById('message-input').value = currentMessage;
  if (page === 'link' && currentUrl) document.getElementById('url-input').value = currentUrl;
});

render();
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => { /* Offline caching is optional; app still works online. */ }));
}
