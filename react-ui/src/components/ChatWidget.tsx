// 1. Import required dependencies
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronDown, ChevronUp, Maximize2, Minimize2, MapPin, ExternalLink, Coffee, Clock, Info, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ChatMessage from './ChatMessage';
import FeedbackForm from './FeedbackForm';
import { Dialog } from "@/components/ui/dialog";

// 2. Brewing Guide Component - Displays coffee brewing instructions
const BrewingGuideDisplay = ({ data }) => {
  // 3. Destructure brewing guide data properties
  const { servings, strength, method, coffeeGrams, waterMl, grindSize, waterTemp, brewTime } = data;

  return (
    <div className="bg-amber-50 rounded-lg p-4 mt-2">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Coffee className="w-5 h-5 text-amber-600" />
        {method.charAt(0).toUpperCase() + method.slice(1)} Brewing Guide
      </h3>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded shadow-sm">
          <p className="text-sm text-gray-600">Servings</p>
          <p className="font-medium">{servings}</p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm">
          <p className="text-sm text-gray-600">Strength</p>
          <p className="font-medium">{strength}</p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm">
          <p className="text-sm text-gray-600">Coffee</p>
          <p className="font-medium">{coffeeGrams}g</p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm">
          <p className="text-sm text-gray-600">Water</p>
          <p className="font-medium">{waterMl}ml</p>
        </div>
      </div>
      <div className="mt-4 bg-white p-3 rounded shadow-sm">
        <h4 className="font-medium mb-2">Instructions</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center text-xs">1</span>
            Grind coffee to {grindSize}
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center text-xs">2</span>
            Heat water to {waterTemp}
          </li>
          <li className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center text-xs">3</span>
            Total brew time: {brewTime}
          </li>
        </ul>
      </div>
    </div>
  );
};

// 4. Shipping Estimate Component - Shows shipping details and costs
const ShippingEstimateDisplay = ({ data }) => {
  // 5. Destructure shipping estimate data
  const { region, method, deliveryTime, cost, notes } = data;

  return (
    <div className="bg-blue-50 rounded-lg p-4 mt-2">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-600" />
        Shipping to {region}
      </h3>
      <div className="mt-3 space-y-3">
        <div className="bg-white p-3 rounded shadow-sm">
          <p className="text-sm text-gray-600">Delivery Method</p>
          <p className="font-medium">{method || 'Standard'} Shipping</p>
          <p className="text-sm text-gray-600 mt-2">Estimated Time</p>
          <p className="font-medium">{deliveryTime}</p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm">
          <p className="text-sm text-gray-600">Shipping Cost</p>
          <p className="font-medium">{cost}</p>
          <p className="text-sm text-gray-500 mt-2">{notes}</p>
        </div>
      </div>
      <div className="mt-4 bg-white p-3 rounded shadow-sm">
        <h4 className="font-medium mb-2">Included with Shipping:</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">✓ Free tracking</li>
          <li className="flex items-center gap-2">✓ Freshly roasted guarantee</li>
          <li className="flex items-center gap-2">✓ Sustainable packaging</li>
          <li className="flex items-center gap-2">✓ 30-day satisfaction guarantee</li>
        </ul>
      </div>
    </div>
  );
};

// 6. Store Location Component - Displays store information and amenities
const StoreLocationDisplay = ({ data }) => {
  // 7. Destructure store location data
  const { name, address, hours, features, specialties, parking, studySpace } = data;

  return (
    <div className="bg-green-50 rounded-lg p-4 mt-2">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <MapPin className="w-5 h-5 text-green-600" />
        {name}
      </h3>
      <div className="mt-3 space-y-3">
        <div className="bg-white p-3 rounded shadow-sm">
          <p className="text-sm text-gray-600">Address</p>
          <p className="font-medium">{address}</p>
          <p className="text-sm text-gray-600 mt-2">Hours</p>
          <p className="font-medium">{hours}</p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm">
          <h4 className="font-medium mb-2">Features & Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {/* 8. Map through and display store features */}
            {features.map((feature, index) => (
              <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="text-sm text-gray-600">Parking</p>
            <p className="font-medium">{parking}</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="text-sm text-gray-600">Study Space</p>
            <p className="font-medium">{studySpace}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 9. Coffee Info Component - Displays general coffee information
const CoffeeInfoDisplay = ({ data }) => {
  // 10. Destructure coffee info data
  const { category, content } = data;

  return (
    <div className="bg-orange-50 rounded-lg p-4 mt-2">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Info className="w-5 h-5 text-orange-600" />
        {category.charAt(0).toUpperCase() + category.slice(1)} Information
      </h3>
      <div className="mt-3">
        <div className="bg-white p-3 rounded shadow-sm">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};

// 11. Main display component to conditionally render appropriate tool output
const MessageDisplay = ({ message }) => {
  // 12. Extract tool name and output from steps
  const toolStep = message.steps?.find(step => step.type === 'tool_name');
  const outputStep = message.steps?.find(step => step.type === 'tool_output');

  // 13. Return plain text if no tool steps found or if it's a RequestMoreInfo tool
  if (!toolStep || !outputStep || toolStep.content === 'RequestMoreInfo') {
    return <p className="text-gray-700">{message.content}</p>;
  }

  const toolName = toolStep.content;
  const toolOutput = outputStep.content;

  // 14. Parse and render brewing guide output
  if (toolName === 'GetBrewingGuide') {
    const lines = toolOutput.split('\n');
    const firstLine = lines[0];
    const match = firstLine.match(/Recipe for (\d+) serving\(s\) of (\w+) (\w+)/);

    const data = {
      method: match?.[3] || '',
      servings: parseInt(match?.[1] || '0'),
      strength: match?.[2] || '',
      coffeeGrams: parseInt(lines[1].split(': ')[1].replace('g', '')),
      waterMl: parseInt(lines[2].split(': ')[1].replace('ml', '')),
      grindSize: lines[3].split(': ')[1],
      waterTemp: lines[4].split(': ')[1],
      brewTime: lines[5].split(': ')[1]
    };
    return <BrewingGuideDisplay data={data} />;
  }

  // 15. Parse and render shipping estimate output
  if (toolName === 'GetShippingEstimate') {
    const lines = toolOutput.split('\n');
    const data = {
      region: lines[0].split('to ')[1].replace(':', ''),
      deliveryTime: lines[1].split(': ')[1],
      cost: lines[2].split(': ')[1],
      notes: lines[3].split(': ')[1],
      method: lines[1].includes('(standard)') ? 'Standard' : 'Express'
    };
    return <ShippingEstimateDisplay data={data} />;
  }

  // 16. Parse and render coffee info output
  if (toolName === 'GetCoffeeInfo') {
    const data = {
      category: message.steps?.find(step => step.type === 'tool_input')?.content.match(/category":"([^"]+)/)?.[1] || 'general',
      content: toolOutput
    };
    return <CoffeeInfoDisplay data={data} />;
  }

  // 17. Parse and render store locations output
  if (toolName === 'GetStoreLocations') {
    const lines = toolOutput.split('\n\n');
    const locations = lines.map(location => {
      const locationLines = location.split('\n');
      return {
        name: locationLines[0].replace(' Location:', ''),
        address: locationLines[1].split(': ')[1],
        hours: locationLines[2].split(': ')[1],
        specialties: locationLines[3].split(': ')[1],
        parking: locationLines[4].split(': ')[1],
        features: ['Coffee bar', 'Wifi available', 'Outdoor seating'],
        studySpace: 'Available'
      };
    });
    return locations.map((location, index) => (
      <StoreLocationDisplay key={index} data={location} />
    ));
  }

  // 18. Default text display
  return <p className="text-gray-700">{message.content}</p>;
};

// 19. Define Message interface type
interface Message {
  type: 'user' | 'bot';
  content: string;
  component?: string;
  data?: any;
  steps?: Array<{
    type: string;
    content: string;
  }>;
}

// 20. Coffee Club Modal Component - Handles subscription form
const CoffeeClubModal = ({ isOpen, onClose, onSubmitMessage }: {
  isOpen: boolean;
  onClose: () => void;
  onSubmitMessage: () => void;
}) => {
  // 21. Initialize form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    frequency: 'monthly',
    roastPreference: 'medium'
  });

  // 22. Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
    onSubmitMessage();
  };

  // 23. Return null if modal is not open
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Coffee className="w-5 h-5 text-amber-600" />
            Join Our Coffee Club
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Delivery Frequency</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.frequency}
                onChange={e => setFormData({ ...formData, frequency: e.target.value })}
              >
                <option value="weekly">Weekly</option>
                <option value="biweekly">Every 2 Weeks</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Roast Preference</label>
              <select
                className="w-full p-2 border rounded"
                value={formData.roastPreference}
                onChange={e => setFormData({ ...formData, roastPreference: e.target.value })}
              >
                <option value="light">Light Roast</option>
                <option value="medium">Medium Roast</option>
                <option value="dark">Dark Roast</option>
                <option value="variety">Variety Pack</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                Join Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

// 24. Main ChatWidget component
export const ChatWidget = () => {
  // 25. State declarations
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedSteps, setExpandedSteps] = useState<{ [key: number]: boolean }>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showCoffeeClubModal, setShowCoffeeClubModal] = useState(false);

  // 26. Helper function to extract store location details
  const extractStoreDetails = (steps: Array<{ type: string; content: string }>) => {
    const storeSteps = steps.filter(step => step.type === 'tool_input' && step.content.includes('latitude'));

    if (storeSteps.length) {
      try {
        return storeSteps.map(step => JSON.parse(step.content));
      } catch {
        return null;
      }
    }
    return null;
  };

  // 27. Handle message sending and API communication
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3008/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'omit',
        mode: 'cors',
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // 28. Check for coffee club modal trigger
      const shouldShowModal = data.steps?.some((step: any) =>
        step.type === 'tool_output' &&
        step.content.includes('SHOW_COFFEE_CLUB_MODAL')
      );

      if (shouldShowModal) {
        setShowCoffeeClubModal(true);
        // 29. Clean the modal trigger from the message
        data.steps = data.steps.map((step: any) => ({
          ...step,
          content: step.content.replace('SHOW_COFFEE_CLUB_MODAL', '').trim()
        }));
      }

      setMessages(prev => [...prev, {
        type: 'bot',
        content: data.answer || 'Sorry, I received an empty response.',
        steps: data.steps
      }]);

    } catch (error) {
      // Error handling...
    } finally {
      setIsLoading(false);
    }
  };

  // 30. Style helper for different step types
  const getStepStyle = (type: string) => {
    switch (type) {
      case 'thought':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'tool_name':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'tool_input':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'tool_output':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'final_answer':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // 31. Toggle step visibility
  const toggleSteps = (messageIndex: number) => {
    setExpandedSteps(prev => ({
      ...prev,
      [messageIndex]: !prev[messageIndex]
    }));
  };

  // 32. Handle coffee club form submission
  const handleCoffeeClubSubmission = () => {
    setInput("I have filled out the Coffee Club subscription form!");
    // Use setTimeout to ensure the input is set before sending
    setTimeout(() => {
      handleSend();
    }, 0);
  };

  // 33. Render closed chat button if widget is not open
  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg animate-fade-in"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  // 34. Determine widget size classes based on expanded state
  const widgetClasses = isExpanded
    ? "fixed bottom-4 right-4 w-[800px] h-[80vh] bg-white rounded-lg shadow-xl flex flex-col animate-slide-in"
    : "fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col animate-slide-in";

  // 35. Main widget render
  return (
    <>
      <div className={widgetClasses}>
        {/* 36. Header section with title and control buttons */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">Customer Support</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 37. Main messages container with scroll */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="animate-fade-in space-y-2">
              {(message.type === 'user' || !message.steps) ? (
                <ChatMessage message={message} />
              ) : (
                <MessageDisplay message={message} />
              )}
              {message.steps?.some(step => step.type === 'tool_name' && step.content === 'FindStoreLocation') &&
                extractStoreDetails(message.steps) && (
                  <div className="space-y-4">
                    {extractStoreDetails(message.steps).map((store, storeIndex) => (
                      <div key={storeIndex} className="bg-gray-50 p-4 rounded-lg border space-y-2">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">Store Location {storeIndex + 1}</h4>
                            {Object.entries(store)
                              .filter(([key]) => key !== 'latitude' && key !== 'longitude')
                              .map(([key, value]) => (
                                <p key={key} className="text-sm text-gray-600 mt-1">
                                  {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                                </p>
                              ))}
                          </div>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${store.latitude},${store.longitude}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open in Maps
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              {message.steps && message.type === 'bot' && (
                <div className="space-y-2">
                  <button
                    onClick={() => toggleSteps(index)}
                    className="flex items-center text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {expandedSteps[index] ? (
                      <ChevronUp className="w-4 h-4 mr-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 mr-1" />
                    )}
                    {expandedSteps[index] ? 'Hide details' : 'Show details'}
                  </button>

                  {expandedSteps[index] && (
                    <div className="space-y-2 mt-2">
                      {message.steps.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className={`text-xs p-2 rounded border ${getStepStyle(step.type)} transition-all duration-200 hover:opacity-90`}
                        >
                          <span className="font-semibold uppercase">{step.type}: </span>
                          {step.content}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {message.component === 'FeedbackForm' && (
                <FeedbackForm orderId={JSON.parse(message.data?.orderId || '{}').orderId} />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
          {isLoading && (
            <div className="flex space-x-2 animate-pulse">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          )}
        </div>

        {/* 44. Message input and send section */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSend} disabled={isLoading}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      {showCoffeeClubModal && (
        <CoffeeClubModal
          isOpen={showCoffeeClubModal}
          onClose={() => setShowCoffeeClubModal(false)}
          onSubmitMessage={handleCoffeeClubSubmission}
        />
      )}
    </>
  );
};  