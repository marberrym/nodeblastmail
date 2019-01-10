//email template.

module.exports = {
    plainText: (object) => {
        return `
            Hello ${object.firstName},

            My name is Matthew and I'm a local builder with Piedmont Ridge Builders.
            Piedmont Ridge Builders purchases commercial, residential and industrial properties
            all throughout Atlanta and handles renovations as well as reconstructions.  We are currently
            working on some building projects in your neighborhood and wanted to see if you were interested
            in selling your property at ${object.address}.

            If you are interested please feel free to reach out to me at your convenience.

            Thank you for your time,

            Matthew Marberry
            Piedmont Ridge Builders
            770-367-5775
        `
    }
}