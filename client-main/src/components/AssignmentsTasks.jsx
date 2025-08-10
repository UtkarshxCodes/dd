import React, { useState } from 'react';

const assignments = [
  {
    title: 'Assignment 1: Identify Common Cyber Threats',
    details: [
      '1- What is a phishing attack? Provide a real-world example.',
      '2- How does ransomware function, and what are its implications?',
      '3- Define malware and list different types.',
      '4- Compare DoS vs. DDoS attacks.',
      '5- What is a zero-day exploit?',
      '6- Explain how social engineering manipulates victims.',
      '7- What is credential stuffing?',
      '8- How does a man-in-the-middle attack work?',
      '9- What is DNS spoofing and how does it affect users?',
      '10- Describe SQL injection with an example.',
      '11- What is privilege escalation?',
      '12- Name 3 nation-state level cyber threats reported in the last 5 years.',
      '13- What is the role of insider threats in organizations?',
      '14- Define botnets and how they are controlled.',
      '15- What is cryptojacking and how can it be detected?',
    ],
  },
  {
    title: 'Assignment 2: Kali Linux Setup & Reconnaissance',
    details: [
      'How do you install Kali Linux on VirtualBox/VMware?',
      'What is the difference between bridged and NAT networking in VMs?',
      'Explain the purpose of the ifconfig or ip a command.',
      'How do you check open ports using netstat?',
      'Use whoami and hostname – what do they return?',
      'What does nmap -sn <IP-range> do?',
      'Explain the purpose of traceroute.',
      'Use nslookup on a domain and interpret the output.',
      'What is OSINT? Give examples of 3 tools used for it.',
      'How do you use theHarvester to gather emails/domains?',
      'Run ping on a known IP. What metrics do you observe?',
      'Use netdiscover – what does it show?',
      'Explain how dig works for DNS information gathering.',
      'Use whois lookup – what key data can be gathered?',
      'What is footprinting, and why is it essential?',
    ],
  },
  {
    title: 'Assignment 3: Real-World Cyber Attacks',
    details: [
      'What happened in the Equifax breach? Root cause?',
      'How was the SolarWinds attack executed?',
      'What made the WannaCry attack so widespread?',
      'Which attack led to the leakage of Sony Pictures data?',
      'Discuss the Colonial Pipeline ransomware attack.',
      'What were the security lapses in Facebook’s 2019 breach?',
      'How did Stuxnet compromise SCADA systems?',
      'What was exploited in the Yahoo data breach?',
      'How was Pegasus spyware used?',
      'Summarize a recent Indian organization cyber attack.',
      'How did attackers compromise Uber’s data (2022)?',
      'Which techniques were used in the Marriott breach?',
      'How did attackers gain persistence in NotPetya malware?',
      'What regulatory impacts followed the GDPR-related fines?',
      'What can be learned from the Uber hack whistleblower?',
    ],
  },
  {
    title: 'Assignment 4: Nmap Scanning & Analysis',
    details: [
      'What is the default Nmap scan?',
      'Explain nmap -sS vs nmap -sT.',
      'How to detect operating systems using Nmap?',
      'Use Nmap to identify open ports on your own machine.',
      'What does -O flag in Nmap do?',
      'How does Nmap perform service/version detection?',
      'What is the difference between TCP SYN and UDP scans?',
      'How do firewalls respond to Nmap scans?',
      'What is a “stealth scan”?',
      'Explain Nmap output using -oN and -oX.',
      'What risks are involved in scanning live systems?',
      'What is a “null scan” and what does it do?',
      'Use nmap -A – analyze output in detail.',
      'How can you scan a range of IPs or subnets?',
      'Document how to avoid detection using timing options.',
    ],
  },
  {
    title: 'Assignment 5: Wireshark Packet Sniffing',
    details: [
      'How do you capture live traffic in Wireshark?',
      'What is a packet and what layers does it contain?',
      'Use a filter to show only HTTP traffic.',
      'Capture DNS requests – what do they show?',
      'How do you identify TCP 3-way handshake?',
      'Inspect ICMP echo request and reply.',
      'Capture FTP credentials in plain text (test environment).',
      'How do you identify ARP poisoning in Wireshark?',
      'What is a malformed packet?',
      'Find packet retransmissions – what might cause them?',
      'Track a TCP stream from start to end.',
      'What information does the info column provide?',
      'How do you export packet data for reports?',
      'Why must sniffing only be done ethically?',
      'Capture packets on your VM and write a summary report.',
    ],
  },
  {
    title: 'Assignment 6: Brute-Force Simulation',
    details: [
      'What is a brute-force attack?',
      'Why are weak passwords dangerous?',
      'What is a wordlist?',
      'Use hydra on a test login page.',
      'How do you detect brute-force via logs?',
      'Explain rate limiting as a defense.',
      'What is a dictionary attack?',
      'Simulate attack using Burp Suite Intruder.',
      'What role does CAPTCHA play?',
      'What is account lockout policy?',
      'Explain credential stuffing.',
      'How can 2FA prevent brute-force?',
      'What are ethical limitations of simulations?',
      'Record response time differences – what does it indicate?',
      'How to log and report findings responsibly?',
    ],
  },
  {
    title: 'Assignment 7: Vulnerability Scanning with OpenVAS',
    details: [
      'What is OpenVAS and how is it installed?',
      'What is a vulnerability scan?',
      'Difference between authenticated vs unauthenticated scan.',
      'Scan your Kali machine using OpenVAS.',
      'Interpret report: what do CVSS scores mean?',
      'Identify high-risk vulnerabilities in scan.',
      'How does OpenVAS detect services?',
      'What are the risks of scanning production systems?',
      'How to schedule scans regularly?',
      'Compare OpenVAS vs Nessus.',
      'What is a scan config?',
      'What plugins does OpenVAS use?',
      'How to generate a PDF scan report?',
      'What remediation actions are suggested in results?',
      'What’s the impact of false positives in reports?',
    ],
  },
  {
    title: 'Assignment 8: DVWA Vulnerability Testing',
    details: [
      'What is DVWA and why is it used?',
      'Enable DVWA in low/medium/high security – observe differences.',
      'Exploit stored XSS – describe your method.',
      'Perform command injection on DVWA.',
      'Demonstrate SQL injection.',
      'Explain blind SQLi and test it.',
      'Exploit file upload vulnerability.',
      'Break CAPTCHA or simulate a CSRF attack.',
      'Mitigate stored XSS – how would you sanitize input?',
      'Use Burp Suite to inspect DVWA traffic.',
      'Try brute-forcing DVWA login.',
      'What protections are bypassed at low security?',
      'What is a reflected XSS?',
      'What is the role of cookies in DVWA?',
      'Write a mitigation checklist for each vulnerability.',
    ],
  },
  {
    title: 'Assignment 9: Pentesting Report & Mitigation',
    details: [
      'How do you structure a penetration test report?',
      'What tools were used during your test?',
      'Summarize reconnaissance results.',
      'Highlight critical vulnerabilities found.',
      'Add screenshots for 3 key findings.',
      'Rate severity of each issue (CVSS scoring).',
      'Provide actionable mitigation for each flaw.',
      'Add timeline of testing.',
      'Include evidence of privilege escalation (if any).',
      'Document testing methodology used.',
      'Mention responsible disclosure policies.',
      'List tools and versions.',
      'Provide executive summary.',
      'Add conclusion and lessons learned.',
      'Provide scope of testing and IPs involved.',
    ],
  },
];

const AssignmentsTasks = ({ userEmail }) => {
  // You can add custom logic if you want to show/hide assignments for Albert
  // For now, Albert will see all cybersecurity assignments like other cyber users
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Assignments / Tasks</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((a, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow-md cursor-pointer hover:bg-gray-100"
            onClick={() => setSelected(a)}
          >
            <h4 className="font-semibold">{a.title}</h4>
          </div>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-3/4 max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold text-lg"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">{selected.title}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {selected.details.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-6 text-right">
              Complete assignments weekly and send the file through mail - <strong>Support@v-edu.us</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentsTasks;