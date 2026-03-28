import fs from 'fs';
import path from 'path';

const colorMap = {
    'tb-ink': 'tb-forest-ink',
    'tb-deep-teal': 'tb-deep-forest',
    'tb-teal': 'tb-jade',
    'tb-rose': 'tb-sienna',
    'tb-coral': 'tb-sienna',
    'tb-peach': 'tb-ember',
    'tb-mist': 'tb-sage-mist',
    'tb-cream': 'tb-sand'
};

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            for (const [oldColor, newColor] of Object.entries(colorMap)) {
                // Replace oldColor globally
                const regex = new RegExp(oldColor, 'g');
                if (regex.test(content)) {
                    content = content.replace(regex, newColor);
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDirectory('./src');
console.log("Done replacing colors.");
