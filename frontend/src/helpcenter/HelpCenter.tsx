import { useState } from "react";
import {
  Search,
  Book,
  MessageCircle,
  Clock,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions sent to your email. For security reasons, the reset link expires after 24 hours.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact our support team by emailing support@example.com or by using the contact form on our website. We typically respond within 24 hours during business days.",
    },
    {
      question: "What are your business hours?",
      answer:
        "Our business hours are Monday to Friday, 9 AM to 5 PM Pacific Time. During off-hours, you can still submit tickets and we'll respond when we return.",
    },
  ];

  const guides = [
    {
      title: "Getting Started Guide",
      description:
        "Learn the basics of our platform with step-by-step instructions.",
      icon: Book,
      link: "/guides/getting-started",
    },
    {
      title: "Advanced Features",
      description:
        "Master our platform's advanced capabilities and boost your productivity.",
      icon: MessageCircle,
      link: "/guides/advanced-features",
    },
    {
      title: "Best Practices",
      description:
        "Learn expert tips and techniques to make the most of our platform.",
      icon: Clock,
      link: "/guides/best-practices",
    },
  ];

  return (
    <div className="min-h-screen  px-8 ml-8">
      {/* Hero Section */}
      <div className="bg-blue-400 py-16 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            How can we help you today?
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-3 rounded-lg shadow-lg text-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-lg hover:shadow-md transition-shadow"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                  >
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Guides Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Popular Guides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <a
                  key={index}
                  href={guide.link}
                  className="group p-6 rounded-lg border hover:shadow-lg transition-all hover:border-blue-500"
                >
                  <div className="flex items-center mb-4">
                    <guide.icon className="h-6 w-6 text-blue-500" />
                    <h3 className="ml-3 font-semibold group-hover:text-blue-500">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{guide.description}</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm">Learn more</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Our support team is here to help! We typically respond within 24
              hours during business days.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Support
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpCenter;
