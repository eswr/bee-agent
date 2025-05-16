import React from 'react';
import { cn } from '@/lib/utils';
import { MapPin, ExternalLink, Coffee, ShoppingCart } from 'lucide-react';

interface ChatMessageProps {
  message: {
    type: 'user' | 'bot';
    content: string;
    steps?: Array<{
      type: string;
      content: string;
    }>;
  };
}

interface OrderDetails {
  productId: string;
  productName: string;
  price: number;
  description: string;
  quantity: number;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const extractStoreDetails = (steps: Array<{ type: string; content: string }>) => {
    const storeStep = steps.find(step => step.type === 'tool_input' && step.content.includes('latitude'));

    if (storeStep) {
      try {
        return JSON.parse(storeStep.content);
      } catch {
        return null;
      }
    }
    return null;
  };

  const hasStoreLocation = message.steps?.some(step =>
    step.type === 'tool_name' && step.content === 'FindStoreLocation'
  );

  const storeDetails = hasStoreLocation && message.steps ? extractStoreDetails(message.steps) : null;

  const extractOrderDetails = (steps: Array<{ type: string; content: string }>) => {
    const orderStep = steps.find(step => step.type === 'tool_input' && step.content.includes('productId'));

    if (orderStep) {
      try {
        return JSON.parse(orderStep.content);
      } catch {
        return null;
      }
    }
    return null;
  };

  const hasOrderDetails = message.steps?.some(step =>
    step.type === 'tool_name' && step.content === 'OrderCoffee'
  );

  const orderDetails = hasOrderDetails && message.steps ? extractOrderDetails(message.steps) : null;

  return (
    <div className="space-y-2">
      {storeDetails && (
        <div className="bg-gray-50 p-4 rounded-lg border space-y-2">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h4 className="font-medium text-sm">Store Location</h4>
              {Object.entries(storeDetails)
                .filter(([key]) => key !== 'latitude' && key !== 'longitude')
                .map(([key, value]) => (
                  <p key={key} className="text-sm text-gray-600 mt-1">
                    {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                  </p>
                ))}
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${storeDetails.latitude},${storeDetails.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Maps
            </a>
          </div>
        </div>
      )}
      {orderDetails && (
        <div className="bg-gray-50 p-4 rounded-lg border space-y-2">
          <div className="flex items-start gap-3">
            <Coffee className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h4 className="font-medium text-sm">Order Details</h4>
              <div className="mt-2">
                <p className="text-sm text-gray-600">{orderDetails.productName}</p>
                <p className="text-sm text-gray-600">${orderDetails.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-1">{orderDetails.description}</p>
                <div className="mt-3">
                  <button
                    onClick={() => {/* Add your order handling logic */ }}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={cn(
          'max-w-[80%] p-3 rounded-lg',
          message.type === 'user'
            ? 'ml-auto bg-primary text-white rounded-br-none'
            : 'bg-gray-100 rounded-bl-none'
        )}
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;