
const newsItems = [
    {
        date: '16/02/2022',
        title: 'Đi ngủ sớm và nguy cơ bị cao huyết áp',
        image: 'data:image/jpeg;base64,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', // Replace with actual image URLs
    },
    {
        date: '30/03/2022',
        title: '7 yếu tố nguy cơ phòng tránh',
        image: 'data:image/jpeg;base64,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',
    },
    // Add more news items as needed
];

export default function Blog() {
    return <div className="flex space-x-4">
        {newsItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-white shadow rounded p-4">
                <img src={item.image} alt={item.title} className="w-full h-32 object-cover mb-4" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
            </div>
        ))}
    </div>
};