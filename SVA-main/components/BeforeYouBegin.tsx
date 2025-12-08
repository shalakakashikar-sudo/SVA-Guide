
import React from 'react';
import { ChevronLeftIcon, BookIcon } from './icons.tsx';

interface BeforeYouBeginProps {
  onBack: () => void;
}

const BeforeYouBegin: React.FC<BeforeYouBeginProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto animate-slide-in">
        <button
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all font-bold text-violet-600 flex items-center gap-2 group"
        >
          <ChevronLeftIcon className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Main Menu</span>
        </button>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <BookIcon size={48} className="text-violet-100" />
              <h1 className="text-3xl md:text-4xl font-bold font-poppins">Before You Begin</h1>
            </div>
            <p className="text-violet-100 text-lg">Master these core concepts before diving into the rules!</p>
          </div>

          <div className="p-6 md:p-8 space-y-12">
            {/* Part I */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-violet-100 pb-2 font-poppins">
                Part I: The Core Principle — The "Jumping S" Rule
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Subject-Verb Agreement means the subject and the main verb must match in number. The most important pattern to memorize happens in the Simple Present Tense.
              </p>
              
              <div className="bg-violet-50 rounded-xl p-6 border border-violet-100 mb-6">
                <h3 className="font-bold text-violet-800 mb-4">How it works:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm font-bold text-gray-400 uppercase mb-1">Singular Subject</div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">He, She, It, The Cat</div>
                    <div className="text-violet-600 font-bold text-xl">Verb ends in -s</div>
                    <p className="text-sm text-gray-500 mt-2">Example: The cat <span className="font-bold text-violet-600">walks</span>.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm font-bold text-gray-400 uppercase mb-1">Plural Subject</div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">They, We, The Cats</div>
                    <div className="text-emerald-600 font-bold text-xl">Base Form (No -s)</div>
                    <p className="text-sm text-gray-500 mt-2">Example: The cats <span className="font-bold text-emerald-600">walk</span>.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Part II */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-violet-100 pb-2 font-poppins">
                Part II: Auxiliary Verb Mastery
              </h2>
              <p className="text-gray-700 mb-6">
                When helping verbs like to be, to have, or to do are used, they must agree with the subject. These tables are your secret weapon!
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Table 1 */}
                <div className="border rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-slate-100 p-3 font-bold text-center text-slate-700">To Be</div>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                      <tr className="bg-white">
                        <td className="p-3 font-medium text-gray-600">I</td>
                        <td className="p-3 text-right font-bold text-violet-600">am / was</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-medium text-gray-600">He, She, It</td>
                        <td className="p-3 text-right font-bold text-violet-600">is / was</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-medium text-gray-600">We, You, They</td>
                        <td className="p-3 text-right font-bold text-emerald-600">are / were</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Table 2 */}
                <div className="border rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-slate-100 p-3 font-bold text-center text-slate-700">To Have</div>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                      <tr className="bg-white">
                        <td className="p-3 font-medium text-gray-600">He, She, It</td>
                        <td className="p-3 text-right font-bold text-violet-600">has</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-medium text-gray-600">I, We, You, They</td>
                        <td className="p-3 text-right font-bold text-emerald-600">have</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Table 3 */}
                <div className="border rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-slate-100 p-3 font-bold text-center text-slate-700">To Do</div>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-100">
                      <tr className="bg-white">
                        <td className="p-3 font-medium text-gray-600">He, She, It</td>
                        <td className="p-3 text-right font-bold text-violet-600">does</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-medium text-gray-600">I, We, You, They</td>
                        <td className="p-3 text-right font-bold text-emerald-600">do</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Part III */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-violet-100 pb-2 font-poppins">
                Part III: Essential Knowledge to Mug Up
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                  <h3 className="font-bold text-amber-800 mb-2">1. The Modal Verb Rule</h3>
                  <p className="text-sm text-amber-900 mb-2">
                    Modal verbs (can, must, should, will) <strong>never</strong> change form. They are always followed by the base verb.
                  </p>
                  <p className="text-sm bg-white p-2 rounded border border-amber-200 inline-block">
                    She <span className="font-bold">must schedule</span> (Not: must schedules)
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-800 mb-2">2. The I and You Exception</h3>
                  <p className="text-sm text-blue-900 mb-2">
                    Even though 'I' and 'You' represent single people, they take the <strong>plural/base form</strong> of the verb in the present tense.
                  </p>
                  <p className="text-sm bg-white p-2 rounded border border-blue-200 inline-block">
                    I <span className="font-bold">walk</span> / You <span className="font-bold">run</span>
                  </p>
                </div>

                <div className="bg-rose-50 p-5 rounded-xl border border-rose-100">
                  <h3 className="font-bold text-rose-800 mb-2">3. Irregular 'S' Endings</h3>
                  <p className="text-sm text-rose-900 mb-2">
                    If a verb ends in -ch, -sh, -x, -ss, or -o, add <strong>-es</strong>. For consonant + y, change y to i and add <strong>-es</strong>.
                  </p>
                  <p className="text-sm bg-white p-2 rounded border border-rose-200 inline-block">
                    She <span className="font-bold">watches</span> / He <span className="font-bold">tries</span>
                  </p>
                </div>

                <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                  <h3 className="font-bold text-emerald-800 mb-2">4. The Subjunctive 'Were'</h3>
                  <p className="text-sm text-emerald-900 mb-2">
                    For hypothetical wishes or conditions, use the plural form <strong>were</strong>, even for singular subjects.
                  </p>
                  <p className="text-sm bg-white p-2 rounded border border-emerald-200 inline-block">
                    If I <span className="font-bold">were</span> a bird...
                  </p>
                </div>
              </div>
            </section>

            {/* Part IV */}
            <section>
               <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-violet-100 pb-2 font-poppins">
                Part IV: Nouns vs. Verbs — The "S" Balance
              </h2>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                <p className="text-gray-700 mb-4">Don't get confused! Nouns and Verbs treat the letter 'S' in opposite ways. Think of it as a balance scale: usually, only one side gets the 'S'.</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                   <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 mb-2">NOUNS</h4>
                      <p className="text-sm text-gray-600 mb-2">Add <strong>-s</strong> to make them <strong>Plural</strong>.</p>
                      <div className="font-mono text-blue-600 bg-blue-50 p-2 rounded">One Bird ➜ Two Bird<strong>s</strong></div>
                   </div>
                   <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-pink-500">
                      <h4 className="font-bold text-pink-800 mb-2">VERBS</h4>
                      <p className="text-sm text-gray-600 mb-2">Add <strong>-s</strong> to make them <strong>Singular</strong>.</p>
                      <div className="font-mono text-pink-600 bg-pink-50 p-2 rounded">They Run ➜ He Run<strong>s</strong></div>
                   </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Quick Reference: Verb Forms</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-xl overflow-hidden">
                    <div className="bg-pink-100 p-3 text-center font-bold text-pink-800">Singular Verbs (The S-List)</div>
                    <div className="p-4 bg-white text-sm text-gray-600 text-center">
                        <p className="italic mb-2">Use with He, She, It, The Boy</p>
                        <ul className="space-y-1 font-medium text-pink-700 text-lg">
                            <li>is</li>
                            <li>was</li>
                            <li>has</li>
                            <li>does</li>
                            <li>walks</li>
                            <li>goes</li>
                            <li>studies</li>
                        </ul>
                    </div>
                </div>
                <div className="border rounded-xl overflow-hidden">
                    <div className="bg-blue-100 p-3 text-center font-bold text-blue-800">Plural Verbs (Base Form)</div>
                    <div className="p-4 bg-white text-sm text-gray-600 text-center">
                         <p className="italic mb-2">Use with I, You, We, They, The Boys</p>
                         <ul className="space-y-1 font-medium text-blue-700 text-lg">
                            <li>are</li>
                            <li>were</li>
                            <li>have</li>
                            <li>do</li>
                            <li>walk</li>
                            <li>go</li>
                            <li>study</li>
                        </ul>
                    </div>
                </div>
              </div>
            </section>

            {/* Part V */}
            <section>
               <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-violet-100 pb-2 font-poppins">
                Part V: The "Who or What" Test
              </h2>
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 flex flex-col md:flex-row gap-6 items-center">
                 <div className="flex-1">
                    <h3 className="font-bold text-emerald-800 mb-2 text-lg">Can't find the subject?</h3>
                    <p className="text-emerald-900 mb-4">
                        Don't be fooled by words in the middle! To find the true subject, find the verb first, then ask the magic question.
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-emerald-800 font-medium bg-white p-4 rounded-lg shadow-sm">
                        <li>Spot the Verb (the action).</li>
                        <li>Ask: <strong>"Who or what [verb]?"</strong></li>
                        <li>The answer is your subject.</li>
                    </ol>
                 </div>
                 <div className="flex-1 bg-white p-5 rounded-xl border border-emerald-200 shadow-sm w-full">
                    <div className="text-xs font-bold text-gray-400 uppercase mb-2">Example</div>
                    <p className="text-lg text-gray-800 mb-3">"The <span className="text-blue-600 font-bold">box</span> of chocolates <span className="text-pink-600 font-bold">is</span> heavy."</p>
                    <div className="space-y-1 text-sm text-gray-600">
                        <p>1. Verb: <span className="font-mono font-bold text-pink-600">is</span></p>
                        <p>2. Ask: "Who or what is heavy?"</p>
                        <p>3. Answer: <span className="font-bold text-blue-600">The box</span> (Not the chocolates!)</p>
                    </div>
                 </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeYouBegin;
