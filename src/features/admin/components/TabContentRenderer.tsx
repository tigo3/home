import React from 'react';
import { Eye, MessageSquare, FileText, Star } from 'lucide-react';

// Import Tab Components
import ProjectsTab from '../tabs/ProjectsTab';
import ServicesTab from '../tabs/ServicesTab';
import StyleEditorTab from '../tabs/StyleEditorTab';
import SocialLinksTab from '../tabs/SocialLinksTab';
import GeneralInfoTab from '../tabs/GeneralInfoTab';
import PagesTab from '../tabs/PagesTab';
import ImageUploader from './ImageUploader';

// Import Utilities and Types (Adjust path as necessary)
import { renderFields, getStaticSectionName, isValidTranslationKey } from '../utils';
import { TranslationsType } from '../types'; // Use suggested type name

// Mock data for dashboard widgets (Should ideally come from props or context)
const stats = {
  pageViews: '1,234',
  totalPages: '12',
  comments: '45',
  averageRating: '4.8'
};

interface TabContentRendererProps {
  activeTab: string | null;
  isLoading: boolean;
  translations: TranslationsType; // Use the correct imported type
  editingPath: string | null;
  setEditingPath: (path: string | null) => void;
  handleInputChange: (path: (string | number)[], value: string) => void; // Match expected signature
  handleAddNewProject: () => void;
  handleAddNewService: () => void;
  handleDeleteItem: (path: (string | number)[], index?: number) => void; // Match expected path signature
}

const renderDashboardContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Page Views */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-700 font-semibold">Page Views</h3>
          <Eye className="text-blue-500" size={20} />
        </div>
        <p className="text-2xl font-bold text-gray-900">{stats.pageViews}</p>
        <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
      </div>
      {/* Total Pages */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-700 font-semibold">Total Pages</h3>
          <FileText className="text-green-500" size={20} />
        </div>
        <p className="text-2xl font-bold text-gray-900">{stats.totalPages}</p>
        <p className="text-sm text-gray-500 mt-2">Published content</p>
      </div>
      {/* Comments */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-700 font-semibold">Comments</h3>
          <MessageSquare className="text-purple-500" size={20} />
        </div>
        <p className="text-2xl font-bold text-gray-900">{stats.comments}</p>
        <p className="text-sm text-gray-500 mt-2">Awaiting response</p>
      </div>
      {/* Average Rating */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-700 font-semibold">Average Rating</h3>
          <Star className="text-yellow-500" size={20} />
        </div>
        <p className="text-2xl font-bold text-gray-900">{stats.averageRating}</p>
        <p className="text-sm text-gray-500 mt-2">Based on feedback</p>
      </div>
    </div>
  );
};


const TabContentRenderer: React.FC<TabContentRendererProps> = ({
  activeTab,
  isLoading,
  translations,
  editingPath,
  setEditingPath,
  handleInputChange,
  handleAddNewProject,
  handleAddNewService,
  handleDeleteItem,
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!activeTab || activeTab === 'dashboard') {
    return renderDashboardContent();
  }

  if (activeTab === 'styleEditor') {
    return <StyleEditorTab />;
  }
  if (activeTab === 'socialLinks') {
    return <SocialLinksTab />;
  }
  if (activeTab === 'pages') {
    return <PagesTab />;
  }
  if (activeTab === 'media') {
    return <ImageUploader />;
  }

  // Check if the activeTab corresponds to a section in translations
  if (isValidTranslationKey(activeTab)) {
    const staticTabTitle = getStaticSectionName(activeTab);

    return (
      <>
        <h3 className="text-xl font-semibold mb-4 text-gray-700 capitalize">
          {staticTabTitle}
        </h3>
        {activeTab === 'projects' ? (
          <ProjectsTab
            data={translations.en.projects} // Assuming 'en' locale for now
            path={[activeTab]}
            handleChange={handleInputChange}
            editingPath={editingPath}
            setEditingPath={setEditingPath}
            handleAddProject={handleAddNewProject}
            handleDelete={handleDeleteItem}
            renderFields={renderFields}
          />
        ) : activeTab === 'services' ? (
          <ServicesTab
            data={translations.en.services} // Assuming 'en' locale
            path={[activeTab]}
            handleChange={handleInputChange}
            editingPath={editingPath}
            setEditingPath={setEditingPath}
            handleAddService={handleAddNewService}
            handleDelete={handleDeleteItem}
            renderFields={renderFields}
          />
        ) : activeTab === 'generalInfo' ? (
          <GeneralInfoTab
            translations={translations} // Pass the whole translations object
            handleInputChange={handleInputChange}
            editingPath={editingPath}
            setEditingPath={setEditingPath}
            getStaticSectionName={getStaticSectionName}
          />
        ) : (
          // Fallback for other potential translation keys if needed
          // This part might need adjustment based on how other sections are handled
          renderFields(
            translations.en[activeTab], // Assuming 'en' locale
            [activeTab],
            handleInputChange,
            editingPath,
            setEditingPath,
            undefined, // handleAdd - might need specific handlers
            handleDeleteItem
          )
        )}
      </>
    );
  }

  // Fallback for invalid tabs
  return <p className="text-red-500">Error: Invalid tab '{activeTab}' selected.</p>;
};

export default TabContentRenderer;