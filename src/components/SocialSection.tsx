import { Instagram, Facebook, Youtube, ExternalLink, Sparkles, Heart } from 'lucide-react';
import { EXTERNAL_LINKS, RESTAURANT_INFO } from '../data/restaurantConfig';

export function SocialSection() {
  const socials = [
    {
      name: 'Instagram',
      handle: '@oldchamparanmeethouse',
      url: EXTERNAL_LINKS.instagramUrl,
      icon: Instagram,
      description: 'Behind-the-scenes handi preparation, daily reels & customer love.',
      color: 'from-[#f9ce34]/20 via-[#ee2a7b]/20 to-[#6228d7]/20',
      borderColor: 'border-[#ee2a7b]/40 hover:border-[#ee2a7b]',
      textColor: 'text-[#f472b6]',
      buttonBg: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'
    },
    {
      name: 'Facebook',
      handle: 'Champaran Meat House',
      url: EXTERNAL_LINKS.facebookUrl,
      icon: Facebook,
      description: 'Community updates, branch announcements, and festival specials.',
      color: 'from-[#1877f2]/20 to-[#1877f2]/10',
      borderColor: 'border-[#1877f2]/40 hover:border-[#1877f2]',
      textColor: 'text-[#60a5fa]',
      buttonBg: 'bg-[#1877f2]'
    },
    {
      name: 'YouTube',
      handle: '@oldchamparanmeethouse6597',
      url: EXTERNAL_LINKS.youtubeChannelUrl,
      icon: Youtube,
      description: 'Full kitchen episodes, cooking documentaries & traditional recipes.',
      color: 'from-[#ff0000]/20 to-[#ff0000]/10',
      borderColor: 'border-[#ff0000]/40 hover:border-[#ff0000]',
      textColor: 'text-[#f87171]',
      buttonBg: 'bg-[#ff0000]'
    }
  ];

  return (
    <section id="socials" className="py-20 bg-[#FBF7F0] relative border-b border-[#E6DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4ECE1] border border-[#DFCDB9] text-[#7C695A] text-xs font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#B84E1A]" />
            <span>Community & Kitchen</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2D231C] tracking-wide">
            Follow Our Journey
          </h2>

          <p className="text-sm sm:text-base text-[#6B594C] mt-2">
            Connect with us online, witness the slow-cooking craft, and share your dining moments.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                id={`social-card-${social.name.toLowerCase()}`}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-[#FFFFFF] border border-[#DFCDB9] hover:border-[#B84E1A] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4ECE1] border border-[#DFCDB9] flex items-center justify-center text-[#2D231C] shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#8A7565] group-hover:text-[#B84E1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#2D231C] group-hover:text-[#B84E1A] transition-colors">
                    {social.name}
                  </h3>

                  <div className={`text-xs font-semibold ${social.textColor} mt-0.5 mb-2`}>
                    {social.handle}
                  </div>

                  <p className="text-xs text-[#6B594C] leading-relaxed">
                    {social.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6DACB] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#B84E1A] group-hover:underline">
                    Visit Official Profile
                  </span>
                  <span className="text-xs text-[#8A7565]">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
