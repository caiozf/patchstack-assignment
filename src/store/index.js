import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	vulnerabilities: [
		{
			id: 1,
			title: 'A01:2021-Broken Access Control',
			short_description: 'moves up from the fifth position; 94% of applications were tested for some form of broken access control. The 34 Common Weakness Enumerations (CWEs) mapped to Broken Access Control had more occurrences in applications than any other category',
			full_description: `Access control enforces policy such that users cannot act outside of their intended permissions. Failures typically lead to unauthorized information disclosure, modification, or destruction of all data or performing a business function outside the user's limits. Common access control vulnerabilities include:

			Violation of the principle of least privilege or deny by default, where access should only be granted for particular capabilities, roles, or users, but is available to anyone.

			Bypassing access control checks by modifying the URL (parameter tampering or force browsing), internal application state, or the HTML page, or by using an attack tool modifying API requests.

			Permitting viewing or editing someone else's account, by providing its unique identifier (insecure direct object references)

			Accessing API with missing access controls for POST, PUT and DELETE.

			Elevation of privilege. Acting as a user without being logged in or acting as an admin when logged in as a user.

			Metadata manipulation, such as replaying or tampering with a JSON Web Token (JWT) access control token, or a cookie or hidden field manipulated to elevate privileges or abusing JWT invalidation.

			CORS misconfiguration allows API access from unauthorized/untrusted origins.

			Force browsing to authenticated pages as an unauthenticated user or to privileged pages as a standard user.`
		},
		{
			id: 2,
			title: 'A02:2021-Cryptographic Failures',
			short_description: 'shifts up one position to #2, previously known as Sensitive Data Exposure, which was broad symptom rather than a root cause. The renewed focus here is on failures related to cryptography which often leads to sensitive data exposure or system compromise.',
			full_description: `The first thing is to determine the protection needs of data in transit and at rest. For example, passwords, credit card numbers, health records, personal information, and business secrets require extra protection, mainly if that data falls under privacy laws, e.g., EU's General Data Protection Regulation (GDPR), or regulations, e.g., financial data protection such as PCI Data Security Standard (PCI DSS). For all such data:

			Is any data transmitted in clear text? This concerns protocols such as HTTP, SMTP, FTP also using TLS upgrades like STARTTLS. External internet traffic is hazardous. Verify all internal traffic, e.g., between load balancers, web servers, or back-end systems.

			Are any old or weak cryptographic algorithms or protocols used either by default or in older code?

			Are default crypto keys in use, weak crypto keys generated or re-used, or is proper key management or rotation missing? Are crypto keys checked into source code repositories?

			Is encryption not enforced, e.g., are any HTTP headers (browser) security directives or headers missing?

			Is the received server certificate and the trust chain properly validated?

			Are initialization vectors ignored, reused, or not generated sufficiently secure for the cryptographic mode of operation? Is an insecure mode of operation such as ECB in use? Is encryption used when authenticated encryption is more appropriate?

			Are passwords being used as cryptographic keys in absence of a password base key derivation function?

			Is randomness used for cryptographic purposes that was not designed to meet cryptographic requirements? Even if the correct function is chosen, does it need to be seeded by the developer, and if not, has the developer over-written the strong seeding functionality built into it with a seed that lacks sufficient entropy/unpredictability?

			Are deprecated hash functions such as MD5 or SHA1 in use, or are non-cryptographic hash functions used when cryptographic hash functions are needed?

			Are deprecated cryptographic padding methods such as PKCS number 1 v1.5 in use?

			Are cryptographic error messages or side channel information exploitable, for example in the form of padding oracle attacks?`
		},
		{
			id: 3,
			title: 'A03:2021-Injection',
			short_description: 'slides down to the third position. 94% of the applications were tested for some form of injection, and the 33 CWEs mapped into this category have the second most occurrences in applications. Cross-site Scripting is now part of this category in this edition.',
			full_description: `An application is vulnerable to attack when:

			User-supplied data is not validated, filtered, or sanitized by the application.

			Dynamic queries or non-parameterized calls without context-aware escaping are used directly in the interpreter.

			Hostile data is used within object-relational mapping (ORM) search parameters to extract additional, sensitive records.

			Hostile data is directly used or concatenated. The SQL or command contains the structure and malicious data in dynamic queries, commands, or stored procedures.

			Some of the more common injections are SQL, NoSQL, OS command, Object Relational Mapping (ORM), LDAP, and Expression Language (EL) or Object Graph Navigation Library (OGNL) injection. The concept is identical among all interpreters. Source code review is the best method of detecting if applications are vulnerable to injections. Automated testing of all parameters, headers, URL, cookies, JSON, SOAP, and XML data inputs is strongly encouraged. Organizations can include static (SAST), dynamic (DAST), and interactive (IAST) application security testing tools into the CI/CD pipeline to identify introduced injection flaws before production deployment.`
		},
		{
			id: 4,
			title: 'A04:2021-Insecure Design',
			short_description: 'is a new category for 2021, with a focus on risks related to design flaws. If we genuinely want to “move left” as an industry, it calls for more use of threat modeling, secure design patterns and principles, and reference architectures.',
			full_description: `Description
			Insecure design is a broad category representing different weaknesses, expressed as “missing or ineffective control design.” Insecure design is not the source for all other Top 10 risk categories. There is a difference between insecure design and insecure implementation. We differentiate between design flaws and implementation defects for a reason, they have different root causes and remediation. A secure design can still have implementation defects leading to vulnerabilities that may be exploited. An insecure design cannot be fixed by a perfect implementation as by definition, needed security controls were never created to defend against specific attacks. One of the factors that contribute to insecure design is the lack of business risk profiling inherent in the software or system being developed, and thus the failure to determine what level of security design is required.`

		},
		{
			id: 5,
			title: 'A05:2021-Security Misconfiguration',
			short_description: 'moves up from #6 in the previous edition; 90% of applications were tested for some form of misconfiguration. With more shifts into highly configurable software, it’s not surprising to see this category move up. The former category for XML External Entities (XXE) is now part of this category.',
			full_description: `The application might be vulnerable if the application is:

			Missing appropriate security hardening across any part of the application stack or improperly configured permissions on cloud services.

			Unnecessary features are enabled or installed (e.g., unnecessary ports, services, pages, accounts, or privileges).

			Default accounts and their passwords are still enabled and unchanged.

			Error handling reveals stack traces or other overly informative error messages to users.

			For upgraded systems, the latest security features are disabled or not configured securely.

			The security settings in the application servers, application frameworks (e.g., Struts, Spring, ASP.NET), libraries, databases, etc., are not set to secure values.

			The server does not send security headers or directives, or they are not set to secure values.

			The software is out of date or vulnerable (see A06:2021-Vulnerable and Outdated Components).`
		},
	]
  },
  getters: {
	vulnerabilities: state => state.vulnerabilities
  },
  mutations: {
	UPDATE_VULNERABILITY(state, payload) {
		let index = state.vulnerabilities.findIndex(vulnerabilitie => vulnerabilitie.id === payload.id)

		state.vulnerabilities[index] = payload;
	},
	ADD_VULNERABILITY(state, payload) {
		state.vulnerabilities.push({
			id: state.vulnerabilities.length + 1,
			...payload
		})
	}
  },
  actions: {
	addVulnerability({commit}, payload) {
		commit('ADD_VULNERABILITY', payload)
	},
	editVulnerability({commit}, payload) {
		commit('UPDATE_VULNERABILITY', payload)
	}
  },
  modules: {
  }
})
